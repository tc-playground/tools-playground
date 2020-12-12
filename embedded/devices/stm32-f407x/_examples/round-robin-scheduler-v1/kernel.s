	AREA | .text |, CODE, READONLY, ALIGN=2
	THUMB
	EXTERN currentPtr			; Import a pointer reference to the current thread.

	EXPORT SysTick_Handler		; Export the assembler function to handle the SysTick clock interrupt.
	EXPORT schedulerLaunch		; Export the assembler function initialise and start the first thread.


; The SysTick_Handler perform the 'context switch'.
;
; First, the current process registers a stored in memory stack. The processor handles the first 8, the rest are done manually.
; Then, the next process registers a loaded from memory stack. The processor handles the first 8, the rest are done manually.
;
; Create current thread context and push onto stack. Push 17 registers onto stack - 16 normal registers and PSR.
;
; When the SysTick interupt occurs the processor automatically copies 8 registers {R0, R1, R2, R3, R12, LR, PC, xPSR} onto the stack.
; The reamining registers must be manually copied onto the stack {}
SysTick_Handler					; Pushed {R0, R1, R2, R3, R12, LR, PC, XPSR} onto the stack.
	CPSID	I					; Disable interupts.
	; Store current TCB process registers onto stack.
	PUSH	{R4-R11}			; Push registers R4-R11 onto the stack.
	LDR		R0,=currentPtr		; Load currentPtr address into R0. The currentPtr references the TCB of the currently running thread.
	LDR		R1,[R0]				; Load currentPtr address value into R1.
	STR		SP,[R1]				; Store SP register into the memory location referenced by the R1 (R1 = currentPtr). 
	; Load current TCB process registers onto stack.
	LDR		R1,[R1,#4]			; (R1 = currentPtr->next). #4 is the size in bytes of the TCB struct.
	STR		R1,[R0]				; (currentPtr = R1)
	LDR		SP,[R1]				; Point to the top of the stack of the new thread. (SP = currentPtr->stackPtr)
	POP		{R4-R11}			; Pop the old registers off the top of the stack.	
	;
	CPSIE	I					; Enable interupts
	BX		LR					; Return and automatically restore 8 registers {R0, R1, R2, R3, R12, LR, PC, xPSR} onto the stack.

; The schedulerLaunch initiliases the first task/thread.
;
schedulerLaunch
	; Launch the scheduler by setting the SP to the address of the first thread	
	LDR 	R0,=currentPtr		; Load pointer of current thread into R0.
	LDR		R2,[R0]				; (R2 = currentPtr) Load what R0 is pointing too into R2.
	LDR		SP,[R2]				; (SP = currnet Ptr->stackPtr)
	; Restore registers in a special sequence
	POP		{R4-R11}
	POP		{R0-R3}
	POP		{R12}
	;
	ADD		SP,SP,#4
	POP		{LR}
	ADD		SP,SP,#4
	;
	CPSIE	I					; Enable interupts
	BX		LR					; Return and automatically restore 8 registers {R0, R1, R2, R3, R12, LR, PC, xPSR} onto the stack.


	ALIGN
	END
	
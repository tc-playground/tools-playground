// Define SVC Prototypes
// NB: Service numbers MUST be contiguous.
int __svc(0x00) svc_service_add(int x, int y);
int __svc(0x01) svc_service_subtract(int x, int y);
int __svc(0x02) svc_service_multiply(int x, int y);
int __svc(0x03) svc_service_divide(int x, int y);

void SVC_Handler_C(unsigned int *svc_args);

int x, y, z = 0;

int main(void) {
	x = 2;
	y = 10;
	
	z = 0;
	z = svc_service_add(x, y);
	
	z = 0;
	z = svc_service_subtract(y, x);
	
	z = 0;
	z = svc_service_multiply(x, y);
	
	z = 0;
	z = svc_service_divide(x, y);
}


// TST : Test Bits - https://developer.arm.com/documentation/dui0497/a/the-cortex-m0-instruction-set/general-data-processing-instructions/tst
// ITE - Pseudo Op - If-Then_else
// MRS : Move to special Register - https://developer.arm.com/documentation/dui0497/a/the-cortex-m0-instruction-set/miscellaneous-instructions/msr?lang=en
__asm void SVC_Handler(void) {
	TST   LR,#4									// Get Bit-3 from Link Register
	ITE   EQ										// IF-THEN-ELSE : IF Bit-3 from 'Link Register'.
	MRSEQ R0, MSP								// THEN - Copy main-stack-pointer to R0. 
	MRSNE R0, PSP								// ELSE - Copy process-stack-pointer to R0.
	B     __cpp(SVC_Handler_C)	// B - Branch to C Handler
}

// When an interupt occurs the SVC_Handler is invoked.
// The svc_args contain the 'stack frame' that was pushed onto the stack.
// Cortex-M copies the register values [R0,R1,R2,R3,R12,R14(LR),R15(PC) into the stack-frame.
void SVC_Handler_C(unsigned int *svc_args) { 
	// Get the PC (#6) from the stack-frame arguments. This is the SVC number.
	unsigned int svc_number = ((char*) svc_args[6])[-2];
	switch(svc_number) {
		case 0:
			// ARM Architecture Procedure Call Standard (AAPCS)
			// R0 = Param 0, R1 = Param 1, R0 = Return vlaue. 
			svc_args[0] = svc_args[0] + svc_args[1];
			break;
		case 1:
			// ARM Architecture Procedure Call Standard (AAPCS)
			// R0 = Param 0, R1 = Param 1, R0 = Return vlaue. 
			svc_args[0] = svc_args[0] - svc_args[1];
			break;
		case 2:
			// ARM Architecture Procedure Call Standard (AAPCS)
			// R0 = Param 0, R1 = Param 1, R0 = Return vlaue. 
			svc_args[0] = svc_args[0] * svc_args[1];
			break;
		case 3:
			// ARM Architecture Procedure Call Standard (AAPCS)
			// R0 = Param 0, R1 = Param 1, R0 = Return vlaue. 
			svc_args[0] = svc_args[0] / svc_args[1];
			break;
		default:
			break;
	}
}

FROM FUNCTION_NAME:VERSION

ENV FN_LISTENER wobble
ENV FN_FORMAT http-stream

RUN apt update
RUN apt install -y curl socat lsof procps psmisc gdb
RUN pip install debugpy

COPY fdk-python-debug-wrapper.sh fdk-python-debug-wrapper.sh
RUN chmod +x fdk-python-debug-wrapper.sh

ENTRYPOINT ["./fdk-python-debug-wrapper.sh"]
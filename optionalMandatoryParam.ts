export type Event = 
    {
        type: "LOG_IN";
        payload: {
            userId: string;
        };
    }
    {
        type: "SIGN_OUT";
    };


// const sendEvent = ( eventType: Event["type"], payload?: any ) => {};

const sendEvent = <Type extends Event["type"]>(
    ...args: Extract<Event, { type: Type }> extends { payload: infer TPayload }
        ? [type: Type, payload: TPayload]
        : [type: Type]
) => { };

sendEvent("SIGN_OUT");

sendEvent ("LOG_IN", { userId: "123"} );

sendEvent("LOG_IN", { userId: "123"} );

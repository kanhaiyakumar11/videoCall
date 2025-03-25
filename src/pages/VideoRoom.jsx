import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

function VideoRoom() {
    let { roomId } = useParams();
    const meetingRef = useRef(null);

    useEffect(() => {
        const appID = 1061352734;
        const serverSecret = "0259fe01f2bdb582f291436840f9db7f";

        // ✅ Room ID sanitize karein (Sirf allowed characters rakhein)
        const validRoomId = roomId.replace(/[^a-zA-Z0-9-_]/g, "");
        if (!validRoomId) {
            console.error("Invalid room ID. Use only letters, numbers, - or _.");
            return;
        }

        if (meetingRef.current) {
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                appID, serverSecret, validRoomId, Date.now().toString(), "kanha"
            );

            const zp = ZegoUIKitPrebuilt.create(kitToken);
            zp.joinRoom({
                container: meetingRef.current,  // ✅ Correct usage of container
                sharedLinks: [
                    {
                        name: "Copy Link",
                        url: `http://localhost:5173/room/${validRoomId}`,
                    },
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall,
                },
            });
        }
    }, [roomId]);

    return <div ref={meetingRef} style={{ width: "100vw", height: "100vh" }} />;
}

export default VideoRoom;

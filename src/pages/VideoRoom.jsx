import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

function VideoRoom() {
    let { roomId } = useParams();
    const meetingRef = useRef(null);

    useEffect(() => {
        const appID = 1061352734;  // ✅ Apna Zego App ID
        const serverSecret = "0259fe01f2bdb582f291436840f9db7f";  // ✅ Apna Zego Secret Key

        // ✅ Room ID sanitize karein
        const validRoomId = roomId.replace(/[^a-zA-Z0-9-_]/g, "");
        if (!validRoomId) {
            console.error("Invalid room ID. Use only letters, numbers, - or _.");
            return;
        }

        if (meetingRef.current) {
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                appID, serverSecret, validRoomId, Date.now().toString(), "User"
            );

            console.log("Kit Token:", kitToken);  // ✅ Debugging ke liye

            const zp = ZegoUIKitPrebuilt.create(kitToken);
            zp.joinRoom({
                container: meetingRef.current,
                sharedLinks: [
                    {
                        name: "Copy Link",
                        url: `https://your-app.onrender.com/room/${validRoomId}`,  // ✅ Render ka URL
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

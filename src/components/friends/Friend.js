import React from "react"


export const FriendCard = ({ friend }) => (
    <section className="friend">
        <h3 className="friend__name">{friend.user.name}</h3>
        <button>Delete Friend</button>
    </section>
)
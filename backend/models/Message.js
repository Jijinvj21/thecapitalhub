import { Schema, model } from "mongoose";

const messageSchema = new Schema(
  {
    chatId: {
      type: Schema.Types.ObjectId,
      ref: "Chats",
    },
    senderId: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
    text: {
      type: String,
    },
    read: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const MessageModel = model("Messages", messageSchema);
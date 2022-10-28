import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  sendMessageIsOpen:true
}
export const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { openSendMessage, closeSendMessage } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) =>
  state.mail.SendMessageIsOpen;

export default mailSlice.reducer;

import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { addCampaignToFirebase } from "../Fireop";

export const NewCampaignToFirebase = createAsyncThunk(
  "NewCampaign",
  async (r ,{getState}) => {
    console.log(r);
    const  date =new Date()
    return await addCampaignToFirebase(
      r.title || `Campaign :${date.getDate}/${date.getMonth}/${date.getFullYear}` ,
      r.attachment || [],
      r.message || '',
      r.contact || 'No Contact',
      r.delay  || '2'
    );
  }
);

const CampSlice = createSlice({
  name: "newcampaign",
  initialState: {
    title: "",
    message: "",
    attachment: [],
    contact: undefined,
    delay: "",
    pending: false,
    fulfilled: false,
    rejected: false,
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload.title;
    },
    setMessage: (state, action) => {
      state.message = action.payload.message;
    },
    setAttachment: (state, action) => {
      state.attachment = [...action.payload.attachment];
    },
    setContact: (state, action) => {
      state.contact = action.payload.contact;
    },
    setDelay: (state, action) => {
      state.delay = action.payload.delay;
    },
  },

  extraReducers: {
    [NewCampaignToFirebase.pending]: (state) => {
      state.pending = true;
    },
    [NewCampaignToFirebase.rejected]: (state) => {
      state.pending = false;
      state.rejected = true;
    },
    [NewCampaignToFirebase.fulfilled]: (state) => {
      state.pending = false;
      state.fulfilled = true;
    },
  },
});

export const { setAttachment, setContact, setDelay, setMessage, setTitle } =
  CampSlice.actions;
export default CampSlice.reducer;

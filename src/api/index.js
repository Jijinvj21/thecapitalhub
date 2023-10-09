import { environment } from "../environments/environment";

const baseUrl = environment.baseUrl;
const API = Object.freeze({
  getUser: `${baseUrl}/users/getUser`,
  postUser: `${baseUrl}/users/createUser`,
  postStartUpData: `${baseUrl}/startup/createStartup`,
  loginUser: `${baseUrl}/users/login`,
  postUserPost: `${baseUrl}/api/posts/newPost`,
  uploadDocument: `${baseUrl}/upload`,
  getDocument: `${baseUrl}/documentation/getDocumentsByUser`,
  getAllPosts: `${baseUrl}/api/posts/getposts`,
  updateUser: `${baseUrl}/users/updateFounder`,
  getOnePager: `${baseUrl}/startUp/getOnePager`,
  getUserById: `${baseUrl}/users/getUserById`,
  getStartupByFounderId: `${baseUrl}/startup/getStartupByFounderId`,
  updateUserById: `${baseUrl}/users/updateUserById`,
  updateIntroMessage: `${baseUrl}/startup/introMessage`,
  getSavedPosts: `${baseUrl}/api/posts/savedPosts`,
  postResetPaswordLink: `${baseUrl}/users/requestPasswordReset`,
  postNewPassword: `${baseUrl}/users/resetPassword`,
  investNow: `${baseUrl}/startUp/investNow`,
  changePassword: `${baseUrl}/users/changePassword`,
  likeUnlikePost: `${baseUrl}/api/posts/likeUnlikePost`,
  pendingConnectionRequests: `${baseUrl}/connections/getPendingConnectionRequests`,
  sentConnectionRequests: `${baseUrl}/connections/getSentPendingConnectionRequests`,
  acceptConnectionRequest: `${baseUrl}/connections/acceptConnectionRequest`,
  rejectConnectionRequest: `${baseUrl}/connections/rejectConnectionRequest`,
  getRecommendations: `${baseUrl}/connections/getRecommendations`,
  getSavedPostCollections: `${baseUrl}/api/posts/getSavedPostCollections`,
  getSavedPostsByCollection: `${baseUrl}/api/posts/getSavedPostsByCollection`,
  getUserConnections: `${baseUrl}/connections/getUserConnections`,
  sendConnectionRequest: `${baseUrl}/connections/sendConnectionRequest`,
  sendPostComment: `${baseUrl}/api/posts/comment`,
  getPostComment: `${baseUrl}/api/posts/getComments`,
  cancelConnectionRequest: `${baseUrl}/connections/cancelConnectionRequest`,
  getSearchResults: `${baseUrl}/users/search`,
  savePostByUserId: `${baseUrl}/api/posts/savePost`,
  deletePost: `${baseUrl}/api/posts/deletePost`,
  getUserChats: `${baseUrl}/chat/getUserChats`,
  createChat: `${baseUrl}/chat/createChat`,
  getMessageByChatId: `${baseUrl}/message/getMessages`,
  addMessage: `${baseUrl}/message/addMessage`,
  getSinglePost: `${baseUrl}/api/posts/getSinglePost`,
  findChat: `${baseUrl}/chat/findChat`,
  markMessagesAsRead: `${baseUrl}/message/markMessagesAsRead`,
  getUnreadMessageCount: `${baseUrl}/message/getUnreadMessageCount`,
  togglePinMessage: `${baseUrl}/chat/togglePin`,
  getPinnedChat: `${baseUrl}/chat/getPinnedChat`,
  getInvestorById: `${baseUrl}/investor/getInvestorById`,
  postInvestorData: `${baseUrl}/investor/createInvestor`,
  addStartupInvested: `${baseUrl}/investor/addStartupInvested`,
  addSectorOfInterest: `${baseUrl}/investor/addSectorOfInterest`,
  uploadLogo: `${baseUrl}/investor/uploadLogo`,
  clearChat: `${baseUrl}/message/clearChatMessages`,
  createCommunity: `${baseUrl}/community/createCommunity`,
  getAllCommunity: `${baseUrl}/community/getAllCommunitiesByUserId`,
  addMyInterest: `${baseUrl}/investor/addMyInterest`,
  getFeaturedPostsByUser: `${baseUrl}/api/posts/getFeaturedPostsByUser`,
  addToFeaturedPost: `${baseUrl}/api/posts/addToFeaturedPost`,
  getCommunityById: `${baseUrl}/community/getCommunityById`,
  getChatSettings: `${baseUrl}/chat/getChatSettings`,
  getCommunitySettings: `${baseUrl}/community/getCommunitySettings`,
  deleteComment: `${baseUrl}/api/posts/deleteComment`,
  likeComment: `${baseUrl}/api/posts/toggleLikeComment`,


  unsavePost: `${baseUrl}/api/posts/unsavePost`,
  removeFromFeaturedPost: `${baseUrl}/api/posts/removeFromFeaturedPost`,
});

export default API;

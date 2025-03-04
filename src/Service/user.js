import axios from "axios";
import API from "../api";

// Helper function to get the token from localStorage
const getAuthToken = () => {
  return localStorage.getItem("accessToken");
};

// Create an instance of Axios with default headers
const axiosInstance = axios.create({
  baseURL: API.baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to include the token in the 'Authorization' header
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

async function getUser() {
  try {
    const response = await axiosInstance.get(API.getUser);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

async function getPdfData(userId, folderName) {
  try {
    const requestBody = {
      userId,
      folderName,
    };
    const response = await axiosInstance.post(API.getDocument, requestBody);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

async function uploadDocument(userData) {
  try {
    const response = await axiosInstance.post(API.uploadDocument, userData);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

async function postUser(userData) {
  try {
    const response = await axiosInstance.post(API.postUser, userData);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

async function postStartUpData(startUpData) {
  try {
    const response = await axiosInstance.post(API.postStartUpData, startUpData);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

async function postUserLogin(userData) {
  try {
    const response = await axiosInstance.post(API.loginUser, userData);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

async function postUserPost(postData) {
  console.log("postData-->0", postData);
  try {
    const response = await axiosInstance.post(API.postUserPost, postData);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
async function getAllPostsAPI() {
  try {
    const response = await axiosInstance.get(API.getAllPosts);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

async function getOnePager(oneLink) {
  try {
    const response = await axiosInstance.get(API.getOnePager + "/" + oneLink);
    console.log("Response", response);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

async function getUserById(oneLink) {
  try {
    const onePager = await getOnePager(oneLink);
    const response = await axiosInstance.get(
      API.getUserById + "/" + onePager.data.founderId
    );
    response.data.data.company = onePager.data.company;
    response.data.data.location = onePager.data.location;
    console.log("Response", response);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export const updateUserAPI = async (data) => {
  try {
    const response = await axiosInstance.patch(API.updateUser, data);
    return response;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

const getStartupByFounderId = async (founderId) => {
  try {
    const response = await axiosInstance.get(
      API.getStartupByFounderId + "/" + founderId
    );
    console.log("Response", response);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const updateUserById = async (userId, data) => {
  try {
    const response = await axiosInstance.patch(
      API.updateUserById + "/" + userId,
      data
    );
    return response;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export const updateIntroMsgAPI = async (newIntro) =>
  await axiosInstance.patch(API.updateIntroMessage, newIntro);

export const getSavedPostsAPI = async () =>
  await axiosInstance.get(API.getSavedPosts);

// export const savePostAPI = async (postId) => await axiosInstance

export const investNow = async (data) => {
  try {
    const response = await axiosInstance.post(API.investNow, data);
    return response;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};
export const postResetPaswordLink = async (email) => {
  console.log("email-fs->", email);
  try {
    const response = await axiosInstance.post(API.postResetPaswordLink, {
      email: email, // Pass the email to the request body
    });
    return response;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export const changePasswordAPI = async (newData) => {
  try {
    const { data } = await axiosInstance.patch(API.changePassword, newData);
    return data;
  } catch (error) {
    console.log(error);
    throw error?.response?.data || error;
  }
};

export const postNewPassword = async (password, token) => {
  try {
    const response = await axiosInstance.patch(API.postNewPassword, {
      token: token,
      newPassword: password,
    });
    return response;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export const likeUnlikeAPI = async (postId) => {
  try {
    const response = await axiosInstance.post(
      `${API.likeUnlikePost}/${postId}`
    );
    return response;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export const pendingConnectionRequestsAPI = async () => {
  try {
    const response = await axiosInstance.get(API.pendingConnectionRequests);
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const acceptConnectionAPI = async (connectionId) => {
  try {
    const response = await axiosInstance.patch(
      `${API.acceptConnectionRequest}/${connectionId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const rejectConnectionAPI = async (connectionId) => {
  try {
    const response = await axiosInstance.patch(
      `${API.rejectConnectionRequest}/${connectionId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const getRecommendations = async (userId) => {
  try {
    const response = await axiosInstance.get(
      `${API.getRecommendations}/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const sentConnectionRequest = async (senderId, receiverId) => {
  try {
    const response = await axiosInstance.post(`${API.sendConnectionRequest}`, {
      senderId: senderId,
      receiverId: receiverId,
    });
    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getSentConnectionsAPI = async () => {
  try {
    const response = await axiosInstance.get(API.sentConnectionRequests);
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export const cancelConnectionRequestAPI = async (connectionId) => {
  try {
    const response = await axiosInstance.delete(
      `${API.cancelConnectionRequest}/${connectionId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export const sendPostComment = async ({ postId, userId, text }) => {
  try {
    const response = await axiosInstance.post(
      `${API.sendPostComment}/${postId}`,
      {
        userId: userId,
        text: text,
      }
    );
    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getPostComment = async ({ postId }) => {
  try {
    const response = await axiosInstance.get(`${API.getPostComment}/${postId}`);
    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getUserConnections = async (userId) => {
  try {
    const response = await axiosInstance.get(
      `${API.getUserConnections}/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// getpost by collection name
export const getSavedPostCollections = async (userId) => {
  try {
    const response = await axiosInstance.get(
      `${API.getSavedPostCollections}/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getSavedPostsByCollection = async (userId, collectionName) => {
  console.log("userId,collectionName-->", userId, collectionName);
  try {
    const response = await axiosInstance.post(
      `${API.getSavedPostsByCollection}/${userId}`,
      {
        collectionName: collectionName,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getUserAndStartUpByUserIdAPI = async (userId) => {
  try {
    const { data } = await axiosInstance.get(`${API.getUserById}/${userId}`);
    return data;
  } catch (error) {
    console.error("Error getting user details:", error);
    throw error;
  }
};

export {
  getUser,
  postUser,
  postStartUpData,
  postUserLogin,
  postUserPost,
  getPdfData,
  uploadDocument,
  getAllPostsAPI,
  getOnePager,
  getUserById,
  getStartupByFounderId,
};

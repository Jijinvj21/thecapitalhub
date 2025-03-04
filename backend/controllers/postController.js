import {
  allPostsData,
  createNewPost,
  // getUserSavedPosts,
  // savePostService,
  singlePostData,
  likeUnlikePost,
  commentOnPost,
  getComments,
  savePost,
  getAllSavedPostCollections,
  getSavedPostsByCollection,
  getLikeCount,
  getUsersWhoLikedPost,
} from "../services/postService";

export const createPost = async (req, res) => {
  try {
    const newPost = await createNewPost({
      ...req.body,
      user: req.userId,
    });
    res.send({
      message: "Post created succesfully",
      data: newPost,
    });
  } catch (err) {
    console.error("Error creating new post: ", err);
    res.status(500).send(err);
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const data = await allPostsData();
    if (!data.length) {
      res.status(404).send({
        message: "No Posts yet",
      });
    } else {
      res.send({ message: "Posts fetched succesfully", data });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getSinglePost = async (req, res) => {
  try {
    const data = await singlePostData(req.params.id);
    if (!data) {
      res.status(404).send({ message: "No post found" });
    } else {
      res.send({ message: "Post fetched succesfully", data });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// export const savePost = async (req, res) => {
//   try {
//     const response = await savePostService(req.userId, req.params.postId);
//     res.send(response);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// export const savePost = async (req, res) => {
//   try {
//     const response = await savePostService(
//       req.userId,
//       req.params.postId,
//       req.body.collection
//     );
//     res.send(response);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// export const getSavedPosts = async (req, res) => {
//   try {
//     const response = await getUserSavedPosts(req.userId);
//     res.send(response);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// like or unlike a post
export const likeUnlikePostController = async (req, res) => {
  try {
    const { postId } = req.params;
    // const { userId } = req.body;
    const response = await likeUnlikePost(postId, req.userId);
    return res.status(response.status).send(response);
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      status: 500,
      message: "An error occurred while liking/unliking the post.",
    });
  }
};

// Comment on a post
export const commentOnPostController = async (req, res) => {
  try {
    const { postId } = req.params;
    const { userId, text } = req.body;
    const response = await commentOnPost(postId, userId, text);
    return res.status(response.status).send(response);
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      status: 500,
      message: "An error occurred while adding the comment.",
    });
  }
};

//get comments
export const getCommentsController = async (req, res) => {
  try {
    const { postId } = req.params;
    const response = await getComments(postId);
    res.status(response.status).send(response);
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "An error occurred while fetching comments.",
    };
  }
};

//save a post
export const savePostController = async (req, res) => {
  try {
    const { postId } = req.params;
    const { userId, collectionName } = req.body;
    const response = await savePost(userId, collectionName, postId);
    return res.status(response.status).send(response);
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      status: 500,
      message: "An error occurred while saving the post.",
    });
  }
};

//get saved post
export const getAllSavedPostCollectionsController = async (req, res) => {
  try {
    const userId = req.params.userId;
    const response = await getAllSavedPostCollections(userId);
    return res.status(response.status).send(response);
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      status: 500,
      message: "An error occurred while getting saved post collections.",
    });
  }
};

//get saved post by collection
export const getSavedPostsByCollectionController = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { collectionName } = req.body;
    const response = await getSavedPostsByCollection(userId, collectionName);
    return res.status(response.status).send(response);
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      status: 500,
      message: "An error occurred getting saved post.",
    });
  }
};

//get likes count
export const getLikeCountController = async (req, res) => {
  try {
    const { postId } = req.params;
    const result = await getLikeCount(postId);
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).send({
      status: 500,
      message: "An error occurred while getting likes count.",
    });
  }
};

//get users who liked the post
export const getUsersWhoLikedPostController = async (req, res) => {
  try {
    const { postId } = req.params;
    const result = await getUsersWhoLikedPost(postId);
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).send({
      status: 500,
      message: "An error occurred while getting liked users.",
    });
  }
};

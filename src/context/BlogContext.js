import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOGPOST":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    case "EDIT_BLOGPOST":
      return state.map(blogPost => {
        if (blogPost.id === action.payload.id) {
          return action.payload;
        } else {
          blogPost;
        }
      });
    case "DELETE_BLOGPOST":
      const list = state.filter(blogPost => {
        return blogPost.id !== action.payload;
      });
      return list;
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return (title, content, navigateBack) => {
    dispatch({ type: "ADD_BLOGPOST", payload: { title, content } });
    navigateBack();
  };
};

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: "DELETE_BLOGPOST", payload: id });
  };
};

const editBlogPost = dispatch => {
  return (id, title, content, navigateBack) => {
    console.log(id, title, content);
    dispatch({ type: "EDIT_BLOGPOST", payload: { id, title, content } });
    navigateBack();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ id: 1, title: "one", content: "post" }]
);

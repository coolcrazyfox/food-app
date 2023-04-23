import React from "react";
export const PATH = {
  ORDERS: "/orders",
  HERO: "/",
  WALLET: "/wallet",
  FAVORITES: "/favorites",
  PROMOTIONS: "/promotions",
  ADD_FRIENDS: "/invite_friends",
  HELP: "/help",
  CONTACT: "/contact",
};
const RouterRoot = () => {
  return (
    <div>
      <Routes>
        <Route path={PATH.HERO} element={<Hero />} />
        <Route path={PATH.USERS} element={<UsersPage />} />
        <Route path={PATH.REGISTRATION} element={<RegistrationPage />} />
        <Route path={PATH.BLOGGER} element={<Blogger />} />
        <Route path={PATH.POSTS} element={<PostsPage />} />
        <Route path={PATH.DETAILS} element={<DetailsBlog />} />
        <Route path={PATH.POST_DETAILS} element={<DetailsPost />} />
        <Route path={PATH.POST_EDIT} element={<EditPost />} />
        <Route path={PATH.SETTINGS} element={<Settings />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default RouterRoot;

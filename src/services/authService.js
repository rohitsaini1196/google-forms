export default   {
    isAuthenticated: false,

    getUser(){
        return {name: "Test User", userId: "coolboy69", email: "coolboy69@gg.com"}
    },


    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },

    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };
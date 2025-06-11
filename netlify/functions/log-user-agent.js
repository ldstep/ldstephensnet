exports.handler = async (event, context) => {
   const userAgent = event.headers["user-agent"] || "No UA";
   console.log("User-Agent:", userAgent);

   return {
      statusCode: 200,
      body: "Thanks for visiting!",
   };
};

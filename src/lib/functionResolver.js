const tryCatchWrapper = (fn) => async (req, res, next) => {
    try {
      await fn(req, res, next); // Execute the wrapped function
    } catch (error) {
      // Handle error here (log it, send response, etc.)
      console.error('Error:', error?.message);
  
      // Send a standard error response
      res.status(500).json({ error: 'Something went wrong', details: error?.message });
    }
  };
  export {tryCatchWrapper}
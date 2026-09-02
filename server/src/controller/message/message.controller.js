export const getMessage = async (request, response, next) => {
  try {
  } catch (error) {
    console.error(`Error, while fetching message: ${error.message}`);
    next(error);
  }
};

export const sendMessage = async (request, response, next) => {
  try {
  } catch (error) {
    console.error(`Error, while sending message: ${error.message}`);
    next(error);
  }
};

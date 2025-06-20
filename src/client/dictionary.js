/**
 * Creates a result object containing the status, message, error, and data.
 *
 * @param {string} status - The status of the result, e.g., 'success' or
 * 'error'.
 * @param {string} message - A descriptive message related to the result.
 * @param {string|null} [error=null] - Any error message associated with the
 * result, default is null.
 * @param {any|null} [data=null] - Any data associated with the result, default
 * is null.
 * @returns {object} A result object with the provided properties.
 */
const Result = (status, message, error = null, data = null) => {
  return {
    status,
    message,
    error,
    data,
  };
};

/**
 * Fetches a dictionary from the specified URL and returns a result object based
 * on the response.
 *
 * @param {string} dictName - The URL of the dictionary to fetch.
 * @returns {Promise<object>} A promise that resolves to a result object
 * indicating the success or failure of the operation.
 */
const fetchDictionary = async (dictName) => {
  // TASK #2: Implement the fetchDictionary function.
  try {
    //'fetching' dictionary URL
    const response = await fetch(dictName);

    //if response is not successful:
    if (!response.ok) {
      return {
        status: "error",
        message: `Failed to fetch dictionary. Status: ${response.status}`,
        error: `Response status: ${response.status}`,
        data: null,
      };
    }

    // Parse the response JSON if it's successful
    const data = await response.json();

    return {
      status: "success",
      message: "Dictionary fetched successfully",
      error: null,
      data: data,
    };
  } catch (error) {
    //if theres an issue fetching:
    return {
      status: "error",
      message: `An error occured while fetching the dictionary`,
      error: error.message,
      data: null,
    };
  }
};

/**
 * Factory function to create a dictionary object that lazily loads and caches
 * the dictionary data from 'dictionary.json'. The dictionary data is fetched
 * only once upon the first call to the 'get' method, and subsequent calls will
 * return the cached data.
 *
 * @returns {object} An object with a `get` method for accessing the dictionary.
 */
const Dictionary = (dictname) => {
  let dictionary = null; // Changed 'const' to 'let' to allow reassignment.
  return {
    /**
     * Retrieves the dictionary data, loading it from 'dictionary.json' if it
     * has not already been loaded. This method ensures the dictionary data is
     * fetched only once, caching the result for future calls.
     *
     * @returns {Promise<object>|object} A promise that resolves to the
     *                                   dictionary data if not previously
     *                                   loaded, or the cached dictionary data.
     */
    get: () => {
      if (!dictionary) {
        dictionary = fetchDictionary(dictname);
      }
      return dictionary;
    },

    loaded: () => dictionary !== null,
  };
};

export default Dictionary;

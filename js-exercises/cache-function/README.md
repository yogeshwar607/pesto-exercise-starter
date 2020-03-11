# Instructions

`cache-function` should return a function that invokes `cb`.

If the returned function is invoked with arguments that it has already seen
then it should return the cached result and not invoke `cb` again.

`cb` should only ever be invoked once for a given set of arguments.

# Requirements

### **What are some good real-life use cases for such a function?**
*
Session management for medium scale
Generic calculation which are same for specific set of users
*

### **What *extra* test cases can you add to the test file?**
*Check for multiple args for function*
*Add relevant test-cases in the test file*
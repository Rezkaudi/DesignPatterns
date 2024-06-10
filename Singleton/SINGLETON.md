# Singleton Design Pattern

The Singleton Design Pattern is a software design pattern that restricts the instantiation of a class to a single instance. This means that no matter how many times you request an object of this class, you will always get the same instance. The Singleton pattern is useful in scenarios where exactly one object is needed to coordinate actions across the system. It ensures that a class has only one instance and provides a global point of access to it.

## Problems Before Using Singleton

Before the introduction of the Singleton pattern, managing instances of classes could lead to several issues:

- **Resource Management**: Without control over the number of instances, resources (like database connections) might be wasted if too many instances were created.
- **Concurrency Issues**: Multiple threads might create multiple instances simultaneously, leading to inconsistencies.
- **State Management**: Managing state across different instances could become complex and error-prone.

## Solutions Provided by Singleton

The Singleton pattern addresses these issues by ensuring:

- **Single Instance**: Only one instance of the class exists throughout the application lifecycle.
- **Global Access Point**: Provides a global point of access to the single instance, simplifying resource management and state sharing.
- **Controlled Instantiation**: Prevents unauthorized creation of new instances, reducing concurrency issues.

## Eager Initialization vs. Lazy Initialization

Singleton patterns can be implemented using either eager initialization or lazy initialization:

- **Eager Initialization**: The instance is created at the time of class loading. This approach is straightforward but may lead to unnecessary overhead if the instance is never used.

  ```java
  public class Singleton {
      private static final Singleton instance = new Singleton();
      
      // Private constructor to prevent instantiation
      private Singleton() {}
      
      public static Singleton getInstance() {
          return instance;
      }
  }
  ```

- **Lazy Initialization**: The instance is created only when it is requested for the first time. This approach saves resources until the instance is actually needed.

  ```java
  public class Singleton {
      private static Singleton instance;
      
      private Singleton() {}
      
      public static synchronized Singleton getInstance() {
          if (instance == null) {
              instance = new Singleton();
          }
          return instance;
      }
  }
  ```

### How to Implement:

1. Add a private static field to the class for storing the singleton instance.
2. Declare a public static creation method for getting the singleton instance.
3. Implement “lazy initialization” inside the static method. It should create a new object on its first call and put it into the static field. The method should always return that instance on all subsequent calls.
4. Make the constructor of the class private. The static method of the class will still be able to call the constructor, but not the other objects.
5. Go over the client code and replace all direct calls to the singleton’s constructor with calls to its static creation method.

### Advantages

- **Controlled Resource Usage**: Ensures efficient use of resources by having a single instance manage them.
- **Reduced Memory Footprint**: Avoids creating multiple instances of the same class, thus saving memory.
- **Global State Management**: Simplifies state management across the application by providing a single point of access.

### Disadvantages

- **Global State**: Can introduce global state into an application, making it harder to reason about and test.
- **Thread-Safety**: Requires careful implementation to ensure thread safety, especially in languages without built-in support for synchronization.
- **Testing Difficulties**: Makes unit testing challenging due to its global nature and reliance on static methods.

In conclusion, the Singleton pattern offers a powerful way to ensure that a class has only one instance and provides a global point of access to it. However, it should be used judiciously, as it introduces global state and can complicate testing and concurrency management. The choice between eager and lazy initialization depends on the specific requirements of the application, such as whether the instance needs to be initialized immediately upon class loading or only when it is first accessed.

```typescript
class Singleton {
    private static instance: Singleton | undefined;

    private constructor() {}

    public static getInstance(): Singleton {
        if (!this.instance) {
            this.instance = new Singleton();
        }
        return this.instance!;
    }
}

// Example usage:
const instanceOne = Singleton.getInstance();
const instanceTwo = Singleton.getInstance();

console.log(instanceOne === instanceTwo); // true, indicating the same instance was returned

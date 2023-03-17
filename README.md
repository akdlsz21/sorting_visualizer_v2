# sorting_visualizer_v2

### Intro

This is a sorting algorithm visualizer inspired by Timo Bingmann.

## Live Demo

https://sorting-visualizer-v2.vercel.app/

## Bubble Sort

https://user-images.githubusercontent.com/81629070/206359204-13b42c56-112b-4604-be9d-4fddd0a185c3.mp4

## Merge Sort

https://user-images.githubusercontent.com/81629070/206359241-76e9430a-868b-45da-a4aa-8945a1b64638.mp4


## Sorting Component
This is a React functional component that displays an array of bars that can be used to visualize different sorting algorithms. The component relies on the Redux store for its state management.

##Dependencies
The component uses the following dependencies:

## React for building the UI.
styled-components for styling the component.
redux and react-redux for managing the component's state.
visualArraySlice for initializing the visual array.
Usage
To use this component, simply import it into your React application and add it to your desired location. The component does not require any props, as it manages its own state.

## State Management
The component's state is managed using Redux. When the component mounts, it dispatches the initialArrayReducer action to initialize the visual array. The array is stored in the Redux store, and the component subscribes to the store using the useSelector hook to access the visual array.

The visual array is then mapped over to display the array bars on the UI. Each array bar is represented as a ArrayBar component, which receives a styleBar prop to set its height and background color.

Styling
The component uses styled-components to style its elements. The main container (StyledContainer) is styled to display the component in the center of the screen. The array container (ArrayContainer) is styled to display the array bars in a row and align them at the bottom of the container.

Resetting the Visual Array
To reset the visual array, the component relies on a resetArray function that can be imported from sorting_logic/resetArray. When the reset button is clicked, the resetArray function is called, which dispatches the initialArrayReducer action to reset the visual array to its initial state. The useSelector hook is then used to get the new state of the visual array, which causes the component to re-render with the new visual array.




import React from 'react';

import useResources from './useResources';

// class ResourceList extends React.Component {
//   state = { resources: [] };
//
//   async componentDidMount() {
//     const response = await axios.get(
//       `https://jsonplaceholder.typicode.com/${this.props.resource}`
//     );
//     this.setState({ resources: response.data });
//   }
//
//   async componentDidUpdate(previousProps) {
//     // We need to check that the props have changed as EVERYTIME setState() is called
//     // 'componentDidUpdate' will be executed.
//     //
//     if (previousProps.resource !== this.props.resource) {
//       const response = await axios.get(
//         `https://jsonplaceholder.typicode.com/${this.props.resource}`
//       );
//       this.setState({ resources: response.data });
//     }
//   }
//
//   render() {
//     return (
//       <div className="ui container">ResourceList: {this.props.resource}</div>
//     );
//   }


const ResourceList = ({ resource }) => {

  const resources = useResources(resource);

  return (
    <ul>
      {resources.map(r => (
        <li key={r.id}>{r.title}</li>
      ))}
    </ul>
  );
};


export default ResourceList;

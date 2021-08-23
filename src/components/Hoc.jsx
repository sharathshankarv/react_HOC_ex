import React,{Component} from 'react';

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const Hoc = WrappedComponent => {
  class WithSearch extends Component{
    state = {
      searchTerm: ""
    };

    filterProducts = (searchTerm) => {
      searchTerm = searchTerm.toUpperCase()
      return this.props.data.filter(item => {
        let str = `${item.title} ${item.style} ${item.sku}`.toUpperCase();
        return str.indexOf(searchTerm) >= 0;
      })
    }

    handleSearch = event => {
      this.setState({ searchTerm: event.target.value });
    };


    render(){
      let { searchTerm } = this.state;
      let filteredProducts = this.filterProducts(searchTerm);
      return ( <div>
        <div style={{margin:"0px 0px 0px 15px" }}>
          <h4 style={{margin:"0px"}}>{this.props.title}</h4>
          <input
            name="hoc_Input_for_search"
            onChange={this.handleSearch}
            value={searchTerm}
            type="text"
            placeholder="Search"
          />
        </div>
        <WrappedComponent data={filteredProducts} /></div>)
    }
  }

  Hoc.displayName = `HOC_(${getDisplayName(WrappedComponent)})`;
  return WithSearch;
}

export default Hoc
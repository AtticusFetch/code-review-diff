import {parse, stringify} from 'query-string';
import getVersionTags from '../tags'   ;
const React = window.React;
class Header extends React.Component {
  constructor( props, context) {
    super(props, context);
  const query = parse(window.location.search );
const version =query.version||'local';
     const versions= [version];
        this.state = {version,versions };
  }
  componentWillMount() {
    getVersionTags().then(tags => {
let versions = tags.map(tag => tag.name.slice(1));versions = [`local`, ...versions];
    this.setState({versions});});}
  handleVersionChange(event) {
      const query = parse(window.location.search);
     query.version = event.target.value;
    if (query.version === 'local') {delete query.version;}
      window.location.search = stringify(query);}
  handleFixtureChange(event) {window.location.pathname = event.target.value;
}
}
export default Header;
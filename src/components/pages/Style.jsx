import { Component } from 'react';
import budget1 from '../../images/budget1.jpg';
import My_page from '../my_page';

class Style extends Component {
  render() {
    return (
      <My_page
        image={budget1}
        name="Acer Extensa 15"
        message="V15 Athlon Gold 3150U / 16ГБ / 128SSD / 15 / Win10 / (82C6S03900)"
        price="180 000KZT"
      />
    );
  }
}

export default Style;

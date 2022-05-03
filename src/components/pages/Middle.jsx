import { Component } from 'react';
import My_page from '../my_page';
import budget1 from '../../images/budget1.jpg';

class Middle extends Component {
  render() {
    return (
      <div className="cards">
        <My_page
          image={budget1}
          name="Acer Extensa 15"
          message="V15 Athlon Gold 3150U / 16ГБ / 128SSD / 15 / Win10 / (82C6S03900)"
          price="180 000KZT"
        />

        <My_page
          image={budget1}
          name="Acer Extensa 15"
          message="V15 Athlon Gold 3150U / 16ГБ / 128SSD / 15 / Win10 / (82C6S03900)"
          price="180 000KZT"
        />
      </div>
    );
  }
}

export default Middle;

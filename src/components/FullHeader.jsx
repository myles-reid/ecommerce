import Header from './Header';
import HeaderTop from './HeaderTop';

function FullHeader({onClick}) {
  return (
    <header>
      <HeaderTop/>
      <Header onClick={onClick}/>
    </header>
  );
}

export default FullHeader;
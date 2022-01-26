import Link from 'next/link';

function Header(props) {
  const { countCartItems } = props;

  return (
    <header class='p-5 text-center'>
      <Link href='/'>
        <a class='title-font font-medium text-gray-900 mb-4'>
          <span class='mb-2.5 text-xl uppercase'>
            CrossFit Equipments and Gears
          </span>
        </a>
      </Link>
    </header>
  );
}

export default Header;

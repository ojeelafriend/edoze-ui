import Image from 'next/image';
import defaultProfileImage from './defaultProfile.svg';
import wishCartIcon from './wishcart.svg';
import cartIcon from './yourcart.svg';

import styles from './Header.module.css';
import Link from 'next/link';

interface Props {
  username: string;
  profileImage: string;
}

const Header: React.FC<Props> = ({ profileImage, username }) => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.name}>
          <h1>EDOZE</h1>
        </div>
        <div className={styles.searcher}>
          <Image src={defaultProfileImage} height={24} width={24} alt="search" />
          <input type="text" name="" id="" placeholder="Search among +100 products" />
        </div>
        <div className={styles.containerButtons}>
          <div className={styles.buttons}>
            <Link className={styles.button} href={'/wishcart'}>
              <p>Wishlist</p>
              <Image src={wishCartIcon} height="24" width="24" alt="cart" />
            </Link>

            <Link className={styles.button} href={'/cart'}>
              <p>Your Cart</p>
              <Image src={cartIcon} height="24" width="24" alt="cart" />
            </Link>

            <Link className={styles.image} href={`/profile/${username}`}>
              <Image src={profileImage} height="50" width="50" alt="cart" />
              {/* <p>{username}</p> */}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;

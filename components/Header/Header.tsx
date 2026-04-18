import Link from "next/link";
import css from "./Header.module.css";
import Container from "../Container/Container";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className={css.header_wrapper}>
        <Container>
          <div className={css.header_container}>
            <Link href={"/"} className={css.logo}>
              <Image
                src="/TravelTrucks.svg"
                alt="TravelTrucks Logo"
                width={136}
                height={15}
                priority
              />
            </Link>
            <nav>
              <ul className={css.menu_list}>
                <li className={css.menu_list_item}>
                  <Link href={"/"} className={css.list_item}>
                    Home
                  </Link>
                </li>
                <li className={css.menu_list_item}>
                  <Link href={"/catalog"} className={css.list_item}>
                    Catalog
                  </Link>
                </li>
              </ul>
            </nav>
            <div className={css.header_placeholder}></div>
          </div>
        </Container>
      </div>
    </>
  );
}

import Link from "next/link";

const titleStyle = "p-0.5 font-bold font-Josefin";
const itemStyle =
  "p-0.5 font-Josefin hover:text-blue-700 hover:underline cursor-pointer";

const about = [
  {
    id: "1",
    name: "PROJEKT",
    href: "/howitworks",
    style: titleStyle
  },
  {
    id: "2",
    name: "Kullavik",
    href: "/howitworks",
    style: itemStyle
  },
  {
    id: "3",
    name: "Boden",
    href: "/fund",
    style: itemStyle
  },
  {
    id: "4",
    name: "Villa Aston",
    href: "/about",
    style: itemStyle
  },
  {
    id: "5",
    name: "Trädgårdskonst",
    href: "/legal",
    style: itemStyle
  }
];

const business = [
  {
    id: "1",
    name: "ABOUT",
    href: "/business",
    style: titleStyle
  },
  {
    id: "2",
    name: "Our story",
    href: "/business",
    style: itemStyle
  },
  {
    id: "3",
    name: "F-skatt",
    href: "/dashboard",
    style: itemStyle
  }
];

const contact = [
  {
    id: "1",
    name: "GET IN TOUCH",
    href: "/contact",
    style: titleStyle
  },
  {
    id: "2",
    name: "Book a studio",
    href: "/contact",
    style: itemStyle
  },
  {
    id: "3",
    name: "F.A.Q",
    href: "/faq",
    style: itemStyle
  }
];

function Footer() {
  return (
    <div className="ml-10">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 mt-3 mb-10 text-sm">
        <Link href="/">
          <a className="mr-20 text-black text-lg font-Josefin hover:bg-gray-100 hover:underline curser-pointer">
            MALMOSTUDIO.SE
          </a>
        </Link>
        <div>
          {business.map((item) => (
            <Link key={item.id} href={item.href} passHref>
              <div className="mt-1">
                <a className={item.style}>{item.name}</a>
              </div>
            </Link>
          ))}
        </div>
        <div>
          {contact.map((item) => (
            <Link key={item.id} href={item.href} passHref>
              <div className="mt-1">
                <a className={item.style}>{item.name}</a>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;

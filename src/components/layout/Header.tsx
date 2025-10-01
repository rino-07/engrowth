'use client';



import React, { useState, useCallback, useEffect } from 'react';

import Link from 'next/link';

import { usePathname } from 'next/navigation';



import Button from '../ui/Button';

import Container from './Container';



const Header: React.FC = () => {

const [isMenuOpen, setIsMenuOpen] = useState(false);

const [isCoursesOpen, setIsCoursesOpen] = useState(false);

const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false);

const [isAboutOpen, setIsAboutOpen] = useState(false);

const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);

const pathname = usePathname();



const handleMenuToggle = useCallback(() => {

setIsMenuOpen(prev => !prev);

}, []);



const handleMenuClose = useCallback(() => {

setIsMenuOpen(false);

}, []);



const handleMobileCoursesToggle = useCallback(() => {

setIsMobileCoursesOpen(prev => !prev);

}, []);



const handleMobileAboutToggle = useCallback(() => {

setIsMobileAboutOpen(prev => !prev);

}, []);



const handleMobileMenuClose = useCallback(() => {

setIsMenuOpen(false);

setIsMobileCoursesOpen(false);

setIsMobileAboutOpen(false);

}, []);



// ページ変更時にメニューを閉じる

useEffect(() => {

setIsMenuOpen(false);

setIsMobileCoursesOpen(false);

setIsMobileAboutOpen(false);

}, [pathname]);



// クリック外でメニューを閉じる

useEffect(() => {

const handleClickOutside = (event: MouseEvent) => {

const target = event.target as Element;

if (isMenuOpen && !target.closest('[data-menu-container]')) {

setIsMenuOpen(false);

setIsMobileCoursesOpen(false);

setIsMobileAboutOpen(false);

}

};



if (isMenuOpen) {

document.addEventListener('click', handleClickOutside);

return () => document.removeEventListener('click', handleClickOutside);

}

}, [isMenuOpen]);



const navigation = [

{ name: 'トップ', href: '/' },

{

name: 'Engrowthの特徴',

href: '/about',

hasDropdown: true,

dropdownItems: [

{ name: 'Engrowthエコシステム', href: '/about/ecosystem' },

{ name: '専属コンサルタント', href: '/about/consultant' },

{ name: '科学的根拠', href: '/about/science' },

{ name: '実践の仕組み', href: '/about/practice' },

]

},

{

name: 'コース・料金',

href: '/courses',

hasDropdown: true,

dropdownItems: [

{ name: 'コース・料金一覧', href: '/courses' },

{ name: 'ビジネスコース', href: '/courses/business' },

{ name: 'ビジネススポットサービス', href: '/courses/business-spot' },

{ name: '学生コース', href: '/courses/study' },

{ name: '学生スポットサービス', href: '/courses/study-spot' },

]

},

{ name: '受講の流れ', href: '/flow' },

{ name: '支援者の方へ', href: '/supporters' },

{ name: 'よくある質問', href: '/faq' },

];



return (

<header className="bg-white shadow-sm sticky top-0 z-50 relative">

<Container>

<div className="flex items-center justify-between h-16 lg:h-20">

{/* Logo */}

<div className="flex-shrink-0">

<Link href="/" className="flex items-center">

<span className="text-2xl font-bold text-brand-red font-serif">

Engrowth

</span>

</Link>

</div>



{/* Desktop Navigation */}

<nav className="hidden md:flex md:items-center md:space-x-8">

{navigation.map((item) => (

<div key={item.name} className="relative">

{item.hasDropdown ? (

<div

className="relative"

onMouseEnter={() => {

if (item.name === 'コース・料金') {

setIsCoursesOpen(true);

} else if (item.name === 'Engrowthの特徴') {

setIsAboutOpen(true);

}

}}

onMouseLeave={() => {

if (item.name === 'コース・料金') {

setIsCoursesOpen(false);

} else if (item.name === 'Engrowthの特徴') {

setIsAboutOpen(false);

}

}}

>

<button

className="text-dark-gray hover:text-brand-red transition-colors duration-200 font-medium flex items-center font-serif"

>

{item.name}

<svg

className="ml-1 h-4 w-4"

fill="none"

stroke="currentColor"

viewBox="0 0 24 24"

xmlns="http://www.w3.org/2000/svg"

>

<path

strokeLinecap="round"

strokeLinejoin="round"

strokeWidth={2}

d="M19 9l-7 7-7-7"

/>

</svg>

</button>


{/* Dropdown Menu */}

<div

className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 transition-all duration-200 ${

(item.name === 'コース・料金' && isCoursesOpen) || (item.name === 'Engrowthの特徴' && isAboutOpen)

? 'opacity-100 visible transform translate-y-0'

: 'opacity-0 invisible transform -translate-y-2'

}`}

>

{item.dropdownItems?.map((dropdownItem) => (

<Link

key={dropdownItem.name}

href={dropdownItem.href}

className="block px-4 py-2 text-sm text-dark-gray hover:text-brand-red hover:bg-light-gray transition-colors duration-200"

>

{dropdownItem.name}

</Link>

))}

</div>

</div>

) : (

<Link

href={item.href || '/'}

className="text-dark-gray hover:text-brand-red transition-colors duration-200 font-medium font-serif"

>

{item.name}

</Link>

)}

</div>

))}

</nav>



{/* CTA Button */}

<div className="hidden md:flex md:items-center">

<Link href="/contact">

<Button variant="primary" size="md">

お問い合わせ

</Button>

</Link>

</div>



{/* Mobile menu button */}

<div className="md:hidden" data-menu-container>

<button

type="button"

className="inline-flex items-center justify-center p-2 rounded-md text-dark-gray hover:text-brand-red hover:bg-light-gray focus:outline-none focus:ring-2 focus:ring-inset focus:ring-action-green"

aria-controls="mobile-menu"

aria-expanded="false"

onClick={handleMenuToggle}

data-menu-container

>

<span className="sr-only">メニューを開く</span>

{!isMenuOpen ? (

<svg

className="block h-6 w-6"

xmlns="http://www.w3.org/2000/svg"

fill="none"

viewBox="0 0 24 24"

stroke="currentColor"

aria-hidden="true"

>

<path

strokeLinecap="round"

strokeLinejoin="round"

strokeWidth={2}

d="M4 6h16M4 12h16M4 18h16"

/>

</svg>

) : (

<svg

className="block h-6 w-6"

xmlns="http://www.w3.org/2000/svg"

fill="none"

viewBox="0 0 24 24"

stroke="currentColor"

aria-hidden="true"

>

<path

strokeLinecap="round"

strokeLinejoin="round"

strokeWidth={2}

d="M6 18L18 6M6 6l12 12"

/>

</svg>

)}

</button>

</div>

</div>



{/* Mobile menu - 簡素化された階層構造 */}

<div

className={`md:hidden transition-all duration-200 ease-in-out ${

isMenuOpen

? 'max-h-screen opacity-100 visible'

: 'max-h-0 opacity-0 invisible'

} overflow-hidden relative z-50 bg-white`}

id="mobile-menu"

data-menu-container

>

<div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-light-gray">

{/* 学習者向けセクション */}

<div className="mb-4">

<div className="px-3 py-1 text-xs font-semibold text-gray uppercase tracking-wider">

学習者の方へ

</div>

{/* モバイル用Engrowthの特徴プルダウン */}

<div className="ml-2">

<button

type="button"

className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-dark-gray hover:text-brand-red hover:bg-light-gray rounded-md transition-colors duration-200 font-serif"

onClick={handleMobileAboutToggle}

>

Engrowthの特徴

<svg

className={`h-4 w-4 transition-transform duration-200 ${

isMobileAboutOpen ? 'transform rotate-180' : ''

}`}

fill="none"

stroke="currentColor"

viewBox="0 0 24 24"

>

<path

strokeLinecap="round"

strokeLinejoin="round"

strokeWidth={2}

d="M19 9l-7 7-7-7"

/>

</svg>

</button>


{/* サブメニュー */}

<div

className={`overflow-hidden transition-all duration-200 ${

isMobileAboutOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'

}`}

>

<div className="py-2 pl-4 space-y-1">

<Link

href="/about/ecosystem"

className="block px-3 py-2 text-sm font-medium text-gray hover:text-brand-red hover:bg-light-gray rounded-md transition-colors duration-200 font-serif"

onClick={handleMobileMenuClose}

>

Engrowthエコシステム

</Link>

<Link

href="/about/consultant"

className="block px-3 py-2 text-sm font-medium text-gray hover:text-brand-red hover:bg-light-gray rounded-md transition-colors duration-200 font-serif"

onClick={handleMobileMenuClose}

>

専属コンサルタント

</Link>

<Link

href="/about/science"

className="block px-3 py-2 text-sm font-medium text-gray hover:text-brand-red hover:bg-light-gray rounded-md transition-colors duration-200 font-serif"

onClick={handleMobileMenuClose}

>

科学的根拠

</Link>

<Link

href="/about/practice"

className="block px-3 py-2 text-sm font-medium text-gray hover:text-brand-red hover:bg-light-gray rounded-md transition-colors duration-200 font-serif"

onClick={handleMobileMenuClose}

>

実践の仕組み

</Link>

</div>

</div>

</div>


{/* モバイル用コース・料金プルダウン */}

<div className="ml-2">

<button

type="button"

className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-dark-gray hover:text-brand-red hover:bg-light-gray rounded-md transition-colors duration-200 font-serif"

onClick={handleMobileCoursesToggle}

>

コース・料金

<svg

className={`h-4 w-4 transition-transform duration-200 ${

isMobileCoursesOpen ? 'transform rotate-180' : ''

}`}

fill="none"

stroke="currentColor"

viewBox="0 0 24 24"

>

<path

strokeLinecap="round"

strokeLinejoin="round"

strokeWidth={2}

d="M19 9l-7 7-7-7"

/>

</svg>

</button>


{/* サブメニュー */}

<div

className={`overflow-hidden transition-all duration-200 ${

isMobileCoursesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'

}`}

>

<div className="py-2 pl-4 space-y-1">

<Link

href="/courses"

className="block px-3 py-2 text-sm font-medium text-gray hover:text-brand-red hover:bg-light-gray rounded-md transition-colors duration-200 font-serif"

onClick={handleMobileMenuClose}

>

コース・料金一覧

</Link>

<Link

href="/courses/business"

className="block px-3 py-2 text-sm font-medium text-gray hover:text-brand-red hover:bg-light-gray rounded-md transition-colors duration-200 font-serif"

onClick={handleMobileMenuClose}

>

ビジネスコース

</Link>

<Link

href="/courses/study"

className="block px-3 py-2 text-sm font-medium text-gray hover:text-brand-red hover:bg-light-gray rounded-md transition-colors duration-200 font-serif"

onClick={handleMobileMenuClose}

>

学生コース

</Link>

<Link

href="/courses/business-spot"

className="block px-3 py-2 text-sm font-medium text-gray hover:text-brand-red hover:bg-light-gray rounded-md transition-colors duration-200 font-serif"

onClick={handleMobileMenuClose}

>

ビジネススポットサービス

</Link>

<Link

href="/courses/study-spot"

className="block px-3 py-2 text-sm font-medium text-gray hover:text-brand-red hover:bg-light-gray rounded-md transition-colors duration-200 font-serif"

onClick={handleMobileMenuClose}

>

学生スポットサービス

</Link>

</div>

</div>

</div>



<Link

href="/flow"

className="block px-3 py-2 text-base font-medium text-dark-gray hover:text-brand-red hover:bg-light-gray rounded-md transition-colors duration-200 ml-2"

onClick={handleMenuClose}

>

受講の流れ

</Link>

</div>



{/* 支援者向けセクション */}

<Link

href="/supporters"

className="block px-3 py-2 text-base font-medium text-dark-gray hover:text-brand-red hover:bg-light-gray rounded-md transition-colors duration-200 font-serif"

onClick={() => setIsMenuOpen(false)}

>

支援者の方へ

</Link>



{/* FAQ */}

<Link

href="/faq"

className="block px-3 py-2 text-base font-medium text-dark-gray hover:text-brand-red hover:bg-light-gray rounded-md transition-colors duration-200 font-serif"

onClick={() => setIsMenuOpen(false)}

>

FAQ

</Link>



{/* お問い合わせボタン */}

<div className="px-3 py-2 mt-4">

<Link href="/contact" onClick={() => setIsMenuOpen(false)}>

<Button variant="primary" size="md" className="w-full">

お問い合わせ

</Button>

</Link>

</div>

</div>

</div>

</Container>

</header>

);

};



export default Header;
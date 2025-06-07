"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ name: "Trang chủ", href: "#home" },
		{ name: "Khóa học", href: "#courses" },
		{ name: "Lộ trình", href: "#roadmap" },
		{ name: "Về WOO GROUP", href: "#about" },
		{ name: "Liên hệ", href: "#contact" },
	];

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
					: "bg-white/90 backdrop-blur-sm border-b border-gray-100"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					{/* <div className="flex items-center animate-fadeInLeft">
            <div className="relative">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/7fe39650d3675ad48497574ab2254dab7be7286e?placeholderIfAbsent=true"
                alt="WOO GROUP Logo"
                className="h-10 w-auto object-contain animate-float"
              />
            </div>
          </div> */}
					<div className="flex gap-2 items-center">
						<div className="flex overflow-hidden flex-col justify-center items-center bg-gradient-to-br from-yellow-400 to-orange-400 h-[36px] sm:h-[40px] lg:h-[48px] rounded-full w-[36px] sm:w-[40px] lg:w-[48px] shadow-lg">
							<img
								src="https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/7fe39650d3675ad48497574ab2254dab7be7286e?placeholderIfAbsent=true"
								className="object-contain aspect-[1.43] w-[24px] sm:w-[28px] lg:w-[32px]"
								alt=""
							/>
						</div>
						<div className="text-xs font-bold text-slate-700 text-center">
							<div>Wings of</div>
							<div className="text-indigo-600">Opportunity</div>
						</div>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						{navItems.map((item, index) => (
							<a
								key={item.name}
								href={item.href}
								className="relative text-[#083D77] hover:text-[#FFD700] font-medium transition-colors duration-300 group animate-fadeInUp"
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								{item.name}
								<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#083D77] transition-all duration-300 group-hover:w-full"></span>
							</a>
						))}
					</nav>

					{/* CTA Button */}
					<div className="hidden md:block animate-fadeInRight">
						<Button className="bg-gradient-to-r from-[#FFD700] to-[#FFD700] hover:from-[#FFD700] hover:to-[#FFD700] text-[#083D77] font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
							Liên hệ tư vấn
						</Button>
					</div>

					{/* Mobile menu button */}
					<button
						className="md:hidden p-2 rounded-lg text-[#083D77] hover:bg-gray-100 transition-colors duration-200"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? (
							<X className="h-6 w-6" />
						) : (
							<Menu className="h-6 w-6" />
						)}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden py-4 space-y-3 animate-fadeInUp">
						{navItems.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="block text-[#083D77] hover:text-[#FFD700] font-medium transition-colors duration-300 py-2"
								onClick={() => setIsMenuOpen(false)}
							>
								{item.name}
							</a>
						))}
						<div className="pt-3">
							<Button className="w-full bg-gradient-to-r from-[#FFD700] to-[#FFD700] text-[#083D77] font-semibold py-2 rounded-full">
								Liên hệ tư vấn
							</Button>
						</div>
					</div>
				)}
			</div>
		</header>
	);
}

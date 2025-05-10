"use client";

import { useEffect } from "react";

export default function HeaderEvent() {
	useEffect(() => {
		const header = document.getElementById("header");
		if (!header) return;
		document.addEventListener("scroll", () => {
			if (window.scrollY > 20) header.classList.add("floating");
			else header.classList.remove("floating");
		});
	}, []);
	return <></>;
}

export type Project = {
	title: string;
	description: string;
	stack: string;
	year: number;
	href?: string;
};

export const projects: Project[] = [
	{
		title: 'Tenda Pecel Lele',
		description: 'Game horor simulasi manajemen warung berlatar tenda pecel lele malam hari dengan sentuhan mistis khas Indonesia.',
		stack: 'SvelteKit',
		year: 2026,
		href: 'https://github.com/sonnnn730/TendaPecelLelee'
	},
	{
		title: 'Landing Page UKM',
		description: 'Halaman profil organisasi sekolah dengan formulir pendaftaran anggota.',
		stack: 'Tailwind',
		year: 2026,
		href: 'https://github.com/nama-kamu/ukm'
	},
	{
		title: 'Dashboard Jaringan',
		description: 'Pemantauan status perangkat lab sekolah secara real-time.',
		stack: 'TypeScript',
		year: 2026,
		href: 'https://github.com/nama-kamu/dashboard'
	}
];

export const profile = {
	bio: 'Saya suka membangun hal yang berguna dan terlihat rapi. Saat ini belajar SvelteKit dan TypeScript, sambil mengerjakan proyek kecil untuk sekolah dan komunitas.',
	facts: [
		{ label: 'FOKUS', value: 'Antarmuka web & sistem informasi' },
		{ label: 'STACK', value: 'SvelteKit · TypeScript · Tailwind' },
		{ label: 'LOKASI', value: 'Indonesia' },
		{ label: 'STATUS', value: 'Terbuka untuk kolaborasi' }
	],
	skills: ['HTML', 'CSS', 'JavaScript', 'SvelteKit', 'Tailwind', 'Git']
};

import { Node } from '@/components/Node';
import Image from 'next/image';

import aboutJPG from '@/public/images/about-img.jpg';
import gallery1JPG from '@/public/images/about-gallery-1.jpg';
import gallery2JPG from '@/public/images/about-gallery-2.jpg';
import gallery3JPG from '@/public/images/about-gallery-3.jpg';
import styles from './page.module.scss';

export default function AboutPage() {
	return (
		<Node style={{ paddingBottom: 0 }}>
			<Node.Header>
				<h1>О компании</h1>
			</Node.Header>
			<div className="content">
				<div className={styles.cols}>
					<div>
						<p>
							Компания &laquo;Формула&raquo; успешно существует на&nbsp;российском рынке уже
							более 20&nbsp;лет.
						</p>
						<p>
							Мы&nbsp;занимаемся комплексным снабжением мясоперерабатывающих и&nbsp;рыбных
							производств.
						</p>
						<p>
							Один из&nbsp;наших принципов&nbsp;&mdash; подход к работе с&nbsp;любовью
							и&nbsp;ответственностью: мы&nbsp;тщательно отслеживаем все новинки в нише
							и&nbsp;предлагаем нашим покупателям только самые качественные ингредиенты. Многие
							продукты, на&nbsp;прилавках супермаркетов России, созданы с&nbsp;помощью нашей
							продукции.
						</p>
						<p style={{ fontWeight: 700, fontStyle: 'italic' }}>
							Наша миссия заключается в&nbsp;стремлении сделать продукты качественными, вкусными
							и&nbsp;безопасными.
						</p>
						<p>
							Мы&nbsp;построили компанию с&nbsp;нуля, пережили не&nbsp;один кризис
							и&nbsp;заработали репутацию надежного поставщика ингредиентов для производства
							продуктов питания на&nbsp;российском рынке.
						</p>
					</div>
					<div>
						<Image
							src={aboutJPG}
							alt=""
						/>
						<div className="h2">Уже 23&nbsp;года</div>
						<p>
							наша компания занимается комплексным снабжением мясоперерабатывающих и&nbsp;рыбных
							предприятий.
						</p>
						<p>
							В&nbsp;нашей команде трудятся професиионалы своего дела, функционирует офис
							и&nbsp;собственный склад, с&nbsp;загруженностью 100&nbsp;тонн.
						</p>
					</div>
				</div>
				<div className={styles.offer}>
					<ul className={styles.offerGallery}>
						<li>
							<Image
								src={gallery1JPG}
								alt=""
							/>
						</li>
						<li>
							<Image
								src={gallery2JPG}
								alt=""
							/>
						</li>
						<li>
							<Image
								src={gallery3JPG}
								alt=""
							/>
						</li>
					</ul>
					<h2>Мы&nbsp;предлагаем:</h2>
					<p>
						<strong>Для мясо и&nbsp;рыбоперерабатывающих производств:</strong>
					</p>
					<p>
						Сухие специи и&nbsp;смеси специй высших сортов. В&nbsp;частности: дробленый перец,
						сушеный лук, укроп, петрушка, морковь, экстракты специй, обсыпки и&nbsp;т.д..
						Натуральные и&nbsp;искусственные оболочки. Рассольные препараты, комплексные пищевые
						добавки, стабилизирующие смеси, фосфаты и&nbsp;их&nbsp;смеси, консерванты, красители,
						ароматизаторы, маринады и&nbsp;т.д.. А&nbsp;так&nbsp;же моноингредиенты: желатины,
						животные белки, бензоат, собрат, изолят соевого белка, каррагинаны и&nbsp;смеси
						с&nbsp;ними и&nbsp;т.д..
					</p>
					<p>
						<strong>Для производств кондитерских изделий:</strong>
					</p>
					<p>
						Желатины, стабилизаторы, начинки, сахара, улучшители, комплексные пищевые смеси,
						ароматизаторы, красители и&nbsp;т.д.
					</p>
				</div>
			</div>
		</Node>
	);
}

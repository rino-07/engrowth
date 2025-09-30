import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Typography from '@/components/ui/Typography';

interface CourseCardData {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

const courseData: CourseCardData[] = [
  {
    id: 'business',
    title: 'ビジネスコース',
    description: '忙しい社会人向けの効率的な英語学習',
    image: '/images/courses/courses-business-course.jpg',
    href: '/courses/business'
  },
  {
    id: 'business-spot',
    title: 'ビジネススポット\nサービス',
    description: '会議同席・資料翻訳・プレゼン準備',
    image: '/images/top/top_business_spot.png',
    href: '/courses/business-spot'
  },
  {
    id: 'student',
    title: '学生コース',
    description: '留学を目指す学生向けの総合プログラム',
    image: '/images/students/students-communication.jpg',
    href: '/courses/study'
  },
  {
    id: 'student-spot',
    title: '学生スポット\nサービス',
    description: 'エッセイ添削指導\n面接練習・対策',
    image: '/images/students/stu03.png',
    href: '/courses/study-spot'
  }
];

interface CourseCardsProps {
  showButton?: boolean;
}

export const CourseCards: React.FC<CourseCardsProps> = () => {
  return (
    <div className="cards-grid-responsive max-w-[1440px] mx-auto">
      {courseData.map((course) => (
        <article key={course.id} className="w-full min-w-0">
          <div className="relative w-full min-w-0 rounded-lg shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:z-10 border-2 border-gray-200 hover:border-brand-red bg-white h-full flex flex-col">
            <div className="flex-1">
              <Image
                src={course.image}
                alt={course.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <Typography variant="heading-sm" className="text-dark-gray card-title">
                {course.title.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < course.title.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </Typography>
              <Typography variant="body-sm" className="text-gray card-description">
                {course.description.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < course.description.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </Typography>
            </div>
            <div className="mt-auto">
              <Link href={course.href}>
                <Button variant="secondary" size="sm" className="w-full">
                  詳しく見る
                </Button>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

// 共通のレイアウトを作る
import { ReactNode , VFC } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

// ReactNodeはchildrenのデータ型
// VFC チルドレンのデータ型を明示的に含まない

// 動的なタイトルを作るために型をつけておく
interface Props {
    children: ReactNode,
    title: String
}

// レイアウトコンポーネントを定義
//  VFC<>の型をつける
// <>にPropsを割り当てて型を定義する
// ホバリングして型が定義してあるか確認できる
export const Layout: VFC<Props> = ({
children,
title = 'welcom to Next.js',
}) => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen text-gray-600 text-sm font-mono'>
            <Head>
                <title>{title}</title>
            </Head>
            {/* ヘッダーの中にナビを作る */}
            <header>
                <nav className='bg-gray-800 w-screen'>
                    <div className='flex items-center pl-8 h-14'>
                        <div className='flex space-x-4'>
                            <Link href="/">
                                <a
                                data-tastid="home-nav"
                                // テストをするのでテスト用のidを作る
                                className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded'>
                                    Home
                                </a>
                            </Link>
                            <Link href="/local-state-a">
                                <a
                                data-tastid="makevar-nav"
                                className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded'>
                                    makeVer
                                </a>
                            </Link>
                            <Link href="/hasura-main">
                                <a
                                data-tastid="fetchpolicy-nav"
                                className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded'>
                                    fetchPolicy(Hasura)
                                </a>
                            </Link>
                            <Link href="/hasura-crud">
                                <a
                                data-tastid="crud-nav"
                                className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded'>
                                    CRUD(Hasura)
                                </a>
                            </Link>
                            <Link href="/hasura-ssg">
                                <a
                                data-tastid="ssg-nav"
                                className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded'>
                                    SSG+ISR(Hasura)
                                </a>
                            </Link>
                            <Link href="/hooks-memo">
                                <a
                                data-tastid="memo-nav"
                                className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded'>
                                    custom hook + memo
                                </a>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
            <main className='flex flex-1 flex-col justify-center items-center w-screen'>
                {children}
            </main>
            <footer className='w-full h-12 flex justify-center items-center border-t'>
                <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                >
                Powered by{' '}
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </a>
            </footer>
        </div>
    )
}
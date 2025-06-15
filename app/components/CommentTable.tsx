"use client"

import { Comments } from "@prisma/client"

export default function CommentTable({ comments }: { comments: Comments[] }) {


    return (
        <>
            { comments.length > 0 ? (
               <ul className=" text-slate-800 dark:text-white">
                    {comments.map((comment) => (
                        <li key={comment.id}>
                            {comment.comment}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-slate-800 dark:text-white">-</p>
            )}
        </>
    )
}
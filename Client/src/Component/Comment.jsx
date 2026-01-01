import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { FaRegThumbsUp, FaRegThumbsDown, FaTrashAlt, FaPen } from 'react-icons/fa';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Comment({ comments }) {
    const [isLiked, setIsLiked] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedComment, setEditedComment] = useState(comments.Comment);
    let [like, setLike] = useState(comments?.Commentlike || 0);
    let { User } = useSelector((store) => store.auth);
    const [userinfos, setuserinfos] = useState({});
    const firstLetter = userinfos?.UserName?.charAt(0)?.toUpperCase() || '';

    async function handlecommentdelete() {
        try {
            let res = await axios.delete(`${import.meta.env.VITE_Base_URL}/comment/deletecomment/${User._id}/${comments._id}`, {
                withCredentials: true
            })
        } catch (error) {
            console.log(error);
        }
    }
    async function handleupdate() {
        try {
            let res = await axios.patch(`${import.meta.env.VITE_Base_URL}/comment/updatecomment/${User._id}/${comments._id}`, {
                Comment: editedComment
            }, {
                withCredentials: true
            })
            setIsEditing(false);

        } catch (error) {
            console.log(error);
        }
    }
    async function handleLike() {
        try {

            let res = await axios.patch(`${import.meta.env.VITE_Base_URL}/comment/like-comment/${User._id}/${comments._id}`, {}, {
                withCredentials: true
            })

            setLike(res.data.totalLikes);

        } catch (error) {
            console.log(error);
        }
    }
    async function handleuserinfo() {
        try {
            let res = await axios.get(`${import.meta.env.VITE_Base_URL}/users/userinfo/${comments.userid}`);
            setuserinfos(res.data.User);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleuserinfo();
    }, []);
    return (
        <div>

            {isEditing ? (<>
                <div className="flex-1 mb-[10px]">
                    <textarea rows="3" value={editedComment} onChange={(e) => { setEditedComment(e.target.value) }} placeholder="Share your thoughts about this product..." className="w-full p-3 rounded-xl border border-[#d2d2d7] bg-white focus:outline-none focus:ring-2 focus:ring-[#0066CC] transition-all resize-none placeholder:text-[#999]"></textarea>
                    <p className="text-gray-800  small">{200 - 1} characters remaining</p>
                    <div className="flex justify-end mt-2">
                        <button type="button" onClick={handleupdate} className="bg-[#0066CC] text-white font-medium px-6 py-2 rounded-full hover:bg-[#004A99] transition-colors">Update</button>
                    </div>
                </div>
            </>) : (<>
                <div className="space-y-5 mb-[10px]">
                    <div className="flex items-start gap-4">
                        <div className="min-w-[40px] min-h-[40px] rounded-full bg-[#007aff] flex items-center justify-center text-white font-semibold">
                            {firstLetter || "?"}
                        </div>
                        <div className="bg-white p-4 rounded-xl w-full shadow-sm">
                            <div className="flex justify-between items-center mb-1">
                                <p className="text-sm font-medium text-[#1D1D1F]">{userinfos.UserName}</p>
                                <span className="text-gray-600 text-xs">{moment(comments.createdAt).fromNow()}</span>
                            </div>
                            <p className="text-sm text-[#333]">
                                {comments.Comment}
                            </p>
                            <div className="flex items-center gap-5 text-[13px] text-[#0071e3] mt-2">
                                <button
                                    onClick={() => {
                                        setIsLiked(!isLiked);
                                        handleLike();
                                    }}
                                    className="hover:underline cursor-pointer flex items-center gap-1"
                                >
                                    {isLiked ? <FaRegThumbsDown size={14} /> : <FaRegThumbsUp size={14} />}
                                    <span className="text-sm">{like}</span> Like
                                </button>
                                <button onClick={() => setIsEditing(!isEditing)} className="hover:underline cursor-pointer flex items-center gap-1 text-[#1D1D1F]">
                                    <FaPen size={13} />Edit
                                </button>

                                <button onClick={handlecommentdelete} className="hover:underline cursor-pointer flex items-center gap-1 text-red-500">
                                    <FaTrashAlt size={13} />
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>)}
        </div>
    )
}

export default Comment

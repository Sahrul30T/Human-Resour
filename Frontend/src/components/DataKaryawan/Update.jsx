import React, { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from

function Update() {
    const {id} = useParams();
    const users = useSelection((state) => state.users)
    const existingUser = user.fileter (f = f.id == id );
    const {name, email} = existingUser[0];
    const [uname, setName] = useState(name)
    const [uemail, setEmail] = useState(email)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleupdate = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id: id,
            name: uname,
            email: uemail
        }))
        navigate('/')
    }

  return (
    <div>Update</div>
  )
}
import useSelection from 'antd/es/table/hooks/useSelection';
import { state } from '@antv/g2plot/lib/adaptor/common';

export default Update
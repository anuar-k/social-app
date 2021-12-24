import * as React from "react";
import axios from "axios";
import classes from "./Users.module.css"

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    }

    onChangePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        // let styles = [classes.Users]
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                <div>
                    {pages.map(page => {
                        return (
                            <span className={this.props.currentPage === page && classes.activePage}
                                  onClick={(e) => {
                                      this.onChangePage(page)
                                  }}
                                  key={page + Math.random() * 1.2}> {page}
                            </span>
                        )
                    })
                    }
                </div>
                {/*users*/}
                {
                    this.props.users.map(user =>
                        <div key={user.id + Math.random() * 10}>
                            <img
                                style={{"width": 40}}
                                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUhbcBoGQfshS-wrsGVe8egbkz1Ba_aNyHCQ&usqp=CAU"}
                            />
                            <div>  {
                                user.followed ?
                                    <button onClick={() => this.props.unfollow(user.id)}>unFollow</button> :
                                    <button onClick={() => this.props.follow(user.id)}>follow</button>
                            }
                            </div>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                            <div>{"user.location.city"}</div>
                            <div>{"user.location.country"}</div>
                        </div>)
                }
            </div>
        )
    }
}


export default Users;
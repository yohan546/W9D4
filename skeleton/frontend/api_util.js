const Util = {

    followUser: id => Util.changeFollowStatus(id, 'POST'),
    unFollowUser: id => Util.changeFollowStatus(id, 'DELETE'),

    changeFollowStatus: (id, method) => (
        $.ajax({
            url: `/users/${id}/follow`,
            dataType: 'JSON',
            method: method
        })
    )

}
class FollowToggle {
    constructor($el) {

        this.userId = $el.data("user-id", user-id) 
        this.followState = $el.data( "initial-follow-state", initial-follow-state)
        this.$el = $('el')
        this.render();


        
    }

    render() {
        switch (this.followState) {
            case 'Followed' : this.$el.html("Unfollow!");
            break;
            case 'Unfollowed' : this.$el.html('Follow!');
        };

        // const = toggleRender = event => {
        //     if ("followed") {
        //         this.$el.html('Unfollow!')
        //     } else {
        //         this.$el.html('Follow!')
        //     };
        // }

        // this.$el.on("click", )
    }




}

module_exports = FollowToggle;
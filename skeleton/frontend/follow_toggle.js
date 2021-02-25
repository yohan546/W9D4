const Util = require("./api_util.js")

class FollowToggle {
    constructor(el, options) {

        this.userId = this.$el.data("user-id");
        this.followState = (this.$el.data("initial-follow-state"));
        this.$el = $(el);
        this.render();

        this.$el.on('click', this.handleClick.bind(this));

    }

    handleClick(event) {
        event.preventDefault();
        const toggleState = event => {
            // const followState = $(this.$el.data("initial-follow-state"))
            if (this.toggleState === 'Unfollowed') {
                this.render();
                this.followState = "Following"
                Util.followUser(this.userId)
            }
            else {
                this.render();
                this.followState = "Unfollowed"
                Util.unFollowUser(this.userId)
            }
        }

    }

    render() {
        switch (this.followState) {
            case 'Followed': this.$el.html("Unfollow!");
                break;
            case 'Unfollowed': this.$el.html('Follow!');
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
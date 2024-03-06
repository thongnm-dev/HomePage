<template>
    <div class="comments" id="comments">
        <div class="fbt-sep-title">
            <h4 class="title-heading-left">No comments</h4>
            <div class="title-sep-container"><div class="title-sep sep-double"></div></div>
            <div class="title-sep-container"><div class="title-sep sep-double"></div></div>
        </div>
        <p>Note: Only a member of this blog may post a comment.</p>
        <div class="comment-form">
            <div id="commentsHolder">
                <div class="commentBodyContainer">
                    <textarea name="commentBody" rows="4" cols="50" id="commentBodyField" placeholder="Enter your comment..."></textarea><br>
                </div>
            </div>
            <div id="postCommentButtonHolder" class="postCommentButtonHolder">
                <input type="button" id="postCommentSubmit" value="Submit">
                <input type="button" id="postCommentPreview" value="Preview">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import BaseComponent, {Component} from '@/utils/base-component';

    @Component
    export default class CommentForm extends BaseComponent {

    }
</script>


<style lang="scss">
    @import '@/assets/sass/comment.scss';
</style>

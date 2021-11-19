<template>
  <div class="task-preview">
    {{ todo.title }}
  </div>
</template>

<script>
export default {
  props: ["todo"]
}
</script>

<style lang="scss" scoped>
	.task-preview {
		padding: 1rem;
		display: flex;
		align-items: center;
		line-height: 1;
		user-select: none;
		border-radius: 0.5rem;
		box-shadow: 0 0 0.3rem rgba($color-black, 0.4);
		&:hover {
			background-color: $color-ghost;
			.task-preview {
				&__button-remove {
					opacity: 1;
					cursor: pointer;
				}
			}
		}
		&.is-done {
			.task-preview {
				&__name {
					color: $color-silver;
					p {
						&:before {
							width: 100%;
						}
					}
				}
				&__button-done {
					color: $color-silver;
				}
			}
		}
		&__name {
			max-width: calc(100% - 10rem);
			font-size: 1.5rem;
			transition: all 0.2s ease-in-out;
			p {
				width: 100%;
				position: relative;
				display: inline-block;
				line-height: 150%;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				&:before {
					content: '';
					width: 0%;
					height: 0.1rem;
					position: absolute;
					top: 50%;
					left: 0;
					background-color: $color-silver;
					transition: all 0.2s ease-in-out;
				}
			}
		}
		&__button-done {
			margin-right: 1.5rem;
			font-size: 2.4rem;
			color: $color-success;
			opacity: 1;
			&:hover {
				color: mix($color-black, $color-success, 20%);
			}
		}
		&__button-remove {
			margin-left: auto;
			color: $color-error;
			font-size: 2rem;
			opacity: 0;
			&:hover {
				color: mix($color-black, $color-error, 20%);
			}
		}
	}
</style>

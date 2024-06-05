import { SvgProps } from '@/types/svg';
import { FC } from 'react';

export const LogoIcon: FC<SvgProps> = (props) => (
	<svg {...props} viewBox='0 0 512 512' fill='none' xmlns='http://www.w3.org/2000/svg'>
		<g clipPath='url(#clip0_2_2)'>
			<path
				d='M137.99 235.8L181.79 236.4L184.79 109.2C190.39 108 195.99 107.4 201.59 107.4L221.39 109.2C226.19 134.8 228.59 158.2 228.59 179.4C228.59 200.6 228.39 220 227.99 237.6L347.39 240C348.19 244 348.59 249.8 348.59 257.4L347.39 275.4C321.79 280.2 298.99 282.6 278.99 282.6C259.39 282.6 241.99 282.4 226.79 282L224.39 414C220.39 414.8 214.59 415.2 206.99 415.2L187.79 414C182.99 388.4 180.59 364.8 180.59 343.2C180.59 321.2 180.79 300.6 181.19 281.4L65.3898 278.4C64.1898 272.8 63.5898 267.4 63.5898 262.2L65.3898 243C90.9898 238.2 115.19 235.8 137.99 235.8Z'
				fill='#9333EA'
			/>
			<mask
				id='path-2-outside-1_2_2'
				maskUnits='userSpaceOnUse'
				x='263.045'
				y='74.959'
				width='242.074'
				height='217.274'
				fill='black'
			>
				<rect fill='white' x='263.045' y='74.959' width='242.074' height='217.274' />
				<path d='M314.941 149.15C315.354 149.377 315.827 149.692 316.359 150.093C317.317 150.815 318.149 151.65 318.853 152.599C317.085 156.275 314.395 160.509 310.785 165.3L282.832 144.237C283.036 142.637 283.459 141.412 284.101 140.56C284.783 139.655 285.231 139.116 285.444 138.943C304.369 136.759 314.599 135.536 316.133 135.272C317.707 134.956 319.622 134.187 321.878 132.966C324.187 131.784 326.044 130.262 327.448 128.398C328.893 126.481 329.471 124.163 329.184 121.442C328.95 118.762 327.343 116.298 324.361 114.051C322.71 112.807 321.179 111.904 319.767 111.341L310.448 119.72C309.876 119.372 309.27 118.957 308.631 118.475C307.992 117.994 307.114 117.165 305.997 115.989C306.87 113.058 308.804 109.549 311.8 105.463C314.094 105.188 316.887 105.414 320.179 106.142C323.564 106.856 326.375 108.056 328.611 109.741C333.296 113.271 336.147 117.298 337.163 121.82C338.273 126.329 337.765 129.995 335.638 132.817C332.91 136.437 329.771 138.997 326.221 140.495C322.724 142.034 318.095 142.97 312.335 143.304L294.772 144.344L294.29 145.483L308.326 155.935C311.32 152.515 313.525 150.253 314.941 149.15ZM369.472 140.281C375.807 145.056 378.982 150.536 378.994 156.723C379.1 162.896 376.525 169.471 371.269 176.445C366.054 183.367 360.344 187.787 354.139 189.706C347.988 191.666 341.718 190.238 335.329 185.424C328.94 180.609 325.712 175.255 325.645 169.362C325.672 163.455 328.514 156.748 334.171 149.241C345.565 134.12 357.332 131.134 369.472 140.281ZM333.769 167.72C333.017 170.158 333.078 172.459 333.953 174.621C334.869 176.729 336.444 178.626 338.681 180.311C340.97 182.037 343.094 183.095 345.053 183.486C347.012 183.877 348.726 183.874 350.193 183.477C351.714 183.121 353.303 182.231 354.959 180.808C357.604 178.628 360.492 175.461 363.621 171.308C372.488 159.541 373.194 150.85 365.74 145.233C363.717 143.708 361.679 142.757 359.627 142.379C357.627 142.041 355.854 142.124 354.306 142.627C352.758 143.13 351.15 144.046 349.48 145.376C346.915 147.45 344.429 150.084 342.022 153.279C339.615 156.473 337.815 159.083 336.624 161.107C335.473 163.077 334.521 165.282 333.769 167.72ZM393.245 208.156C393.658 208.384 394.13 208.698 394.663 209.099C395.621 209.821 396.453 210.657 397.157 211.605C395.389 215.281 392.699 219.515 389.088 224.306L361.136 203.243C361.34 201.643 361.762 200.418 362.404 199.566C363.086 198.661 363.534 198.122 363.748 197.949C382.673 195.765 392.903 194.542 394.436 194.279C396.011 193.962 397.926 193.193 400.182 191.972C402.491 190.79 404.348 189.268 405.752 187.404C407.196 185.488 407.775 183.169 407.488 180.448C407.254 177.768 405.646 175.304 402.665 173.057C401.014 171.813 399.483 170.91 398.071 170.347L388.752 178.726C388.179 178.378 387.573 177.963 386.935 177.481C386.296 177 385.418 176.171 384.3 174.996C385.174 172.064 387.108 168.555 390.104 164.469C392.398 164.194 395.191 164.42 398.483 165.148C401.868 165.862 404.678 167.062 406.914 168.747C411.6 172.277 414.451 176.304 415.467 180.826C416.577 185.335 416.068 189.001 413.942 191.823C411.214 195.443 408.075 198.003 404.525 199.501C401.028 201.04 396.399 201.976 390.638 202.31L373.076 203.35L372.593 204.489L386.63 214.941C389.624 211.521 391.829 209.259 393.245 208.156ZM425.005 238.976L445.992 209.463L406.596 225.354C414.769 231.346 420.905 235.886 425.005 238.976ZM458.333 208.871L430.995 243.489C432.965 244.974 435.826 247.214 439.58 250.209C437.894 252.445 436.405 253.868 435.11 254.479L427.124 248.46L416.514 261.376C415.595 260.934 414.736 260.412 413.938 259.811C413.139 259.209 412.474 258.541 411.942 257.806L421.293 244.067L397.095 225.832C397.138 224.446 397.521 223.273 398.243 222.315C399.005 221.303 399.433 220.791 399.526 220.778L447.791 200.927L458.333 208.871ZM442.825 264.55C443.2 263.831 443.969 262.699 445.133 261.155C446.296 259.611 447.559 258.267 448.922 257.124C450.493 258.14 451.917 259.13 453.195 260.093C454.526 261.096 455.677 262.172 456.648 263.321C456.193 264.147 455.383 265.332 454.22 266.876C453.096 268.366 451.813 269.737 450.371 270.987C448.972 270.184 447.528 269.22 446.037 268.097C444.546 266.974 443.476 265.791 442.825 264.55ZM458.542 256.985C458.183 256.798 457.55 256.363 456.645 255.681C455.74 254.999 454.955 254.324 454.29 253.656L486.195 207.328C487.873 208.425 489.244 209.375 490.309 210.177C491.374 210.98 492.391 211.955 493.362 213.104L458.542 256.985Z' />
			</mask>
			<path
				d='M314.941 149.15C315.354 149.377 315.827 149.692 316.359 150.093C317.317 150.815 318.149 151.65 318.853 152.599C317.085 156.275 314.395 160.509 310.785 165.3L282.832 144.237C283.036 142.637 283.459 141.412 284.101 140.56C284.783 139.655 285.231 139.116 285.444 138.943C304.369 136.759 314.599 135.536 316.133 135.272C317.707 134.956 319.622 134.187 321.878 132.966C324.187 131.784 326.044 130.262 327.448 128.398C328.893 126.481 329.471 124.163 329.184 121.442C328.95 118.762 327.343 116.298 324.361 114.051C322.71 112.807 321.179 111.904 319.767 111.341L310.448 119.72C309.876 119.372 309.27 118.957 308.631 118.475C307.992 117.994 307.114 117.165 305.997 115.989C306.87 113.058 308.804 109.549 311.8 105.463C314.094 105.188 316.887 105.414 320.179 106.142C323.564 106.856 326.375 108.056 328.611 109.741C333.296 113.271 336.147 117.298 337.163 121.82C338.273 126.329 337.765 129.995 335.638 132.817C332.91 136.437 329.771 138.997 326.221 140.495C322.724 142.034 318.095 142.97 312.335 143.304L294.772 144.344L294.29 145.483L308.326 155.935C311.32 152.515 313.525 150.253 314.941 149.15ZM369.472 140.281C375.807 145.056 378.982 150.536 378.994 156.723C379.1 162.896 376.525 169.471 371.269 176.445C366.054 183.367 360.344 187.787 354.139 189.706C347.988 191.666 341.718 190.238 335.329 185.424C328.94 180.609 325.712 175.255 325.645 169.362C325.672 163.455 328.514 156.748 334.171 149.241C345.565 134.12 357.332 131.134 369.472 140.281ZM333.769 167.72C333.017 170.158 333.078 172.459 333.953 174.621C334.869 176.729 336.444 178.626 338.681 180.311C340.97 182.037 343.094 183.095 345.053 183.486C347.012 183.877 348.726 183.874 350.193 183.477C351.714 183.121 353.303 182.231 354.959 180.808C357.604 178.628 360.492 175.461 363.621 171.308C372.488 159.541 373.194 150.85 365.74 145.233C363.717 143.708 361.679 142.757 359.627 142.379C357.627 142.041 355.854 142.124 354.306 142.627C352.758 143.13 351.15 144.046 349.48 145.376C346.915 147.45 344.429 150.084 342.022 153.279C339.615 156.473 337.815 159.083 336.624 161.107C335.473 163.077 334.521 165.282 333.769 167.72ZM393.245 208.156C393.658 208.384 394.13 208.698 394.663 209.099C395.621 209.821 396.453 210.657 397.157 211.605C395.389 215.281 392.699 219.515 389.088 224.306L361.136 203.243C361.34 201.643 361.762 200.418 362.404 199.566C363.086 198.661 363.534 198.122 363.748 197.949C382.673 195.765 392.903 194.542 394.436 194.279C396.011 193.962 397.926 193.193 400.182 191.972C402.491 190.79 404.348 189.268 405.752 187.404C407.196 185.488 407.775 183.169 407.488 180.448C407.254 177.768 405.646 175.304 402.665 173.057C401.014 171.813 399.483 170.91 398.071 170.347L388.752 178.726C388.179 178.378 387.573 177.963 386.935 177.481C386.296 177 385.418 176.171 384.3 174.996C385.174 172.064 387.108 168.555 390.104 164.469C392.398 164.194 395.191 164.42 398.483 165.148C401.868 165.862 404.678 167.062 406.914 168.747C411.6 172.277 414.451 176.304 415.467 180.826C416.577 185.335 416.068 189.001 413.942 191.823C411.214 195.443 408.075 198.003 404.525 199.501C401.028 201.04 396.399 201.976 390.638 202.31L373.076 203.35L372.593 204.489L386.63 214.941C389.624 211.521 391.829 209.259 393.245 208.156ZM425.005 238.976L445.992 209.463L406.596 225.354C414.769 231.346 420.905 235.886 425.005 238.976ZM458.333 208.871L430.995 243.489C432.965 244.974 435.826 247.214 439.58 250.209C437.894 252.445 436.405 253.868 435.11 254.479L427.124 248.46L416.514 261.376C415.595 260.934 414.736 260.412 413.938 259.811C413.139 259.209 412.474 258.541 411.942 257.806L421.293 244.067L397.095 225.832C397.138 224.446 397.521 223.273 398.243 222.315C399.005 221.303 399.433 220.791 399.526 220.778L447.791 200.927L458.333 208.871ZM442.825 264.55C443.2 263.831 443.969 262.699 445.133 261.155C446.296 259.611 447.559 258.267 448.922 257.124C450.493 258.14 451.917 259.13 453.195 260.093C454.526 261.096 455.677 262.172 456.648 263.321C456.193 264.147 455.383 265.332 454.22 266.876C453.096 268.366 451.813 269.737 450.371 270.987C448.972 270.184 447.528 269.22 446.037 268.097C444.546 266.974 443.476 265.791 442.825 264.55ZM458.542 256.985C458.183 256.798 457.55 256.363 456.645 255.681C455.74 254.999 454.955 254.324 454.29 253.656L486.195 207.328C487.873 208.425 489.244 209.375 490.309 210.177C491.374 210.98 492.391 211.955 493.362 213.104L458.542 256.985Z'
				fill='#D9D9D9'
			/>
			<path
				d='M314.941 149.15L318.321 143.02L314.279 140.791L310.638 143.629L314.941 149.15ZM318.853 152.599L325.161 155.633L326.996 151.82L324.472 148.424L318.853 152.599ZM310.785 165.3L306.572 170.891L312.162 175.104L316.375 169.513L310.785 165.3ZM282.832 144.237L275.888 143.353L275.375 147.383L278.62 149.827L282.832 144.237ZM285.444 138.943L284.642 131.989L282.623 132.222L281.043 133.5L285.444 138.943ZM316.133 135.272L317.316 142.172L317.415 142.155L317.512 142.135L316.133 135.272ZM321.878 132.966L318.69 126.734L318.617 126.771L318.545 126.81L321.878 132.966ZM329.184 121.442L322.211 122.051L322.216 122.114L322.223 122.177L329.184 121.442ZM319.767 111.341L322.36 104.839L318.321 103.228L315.087 106.135L319.767 111.341ZM310.448 119.72L306.813 125.701L311.259 128.404L315.128 124.925L310.448 119.72ZM305.997 115.989L299.288 113.991L298.131 117.874L300.922 120.811L305.997 115.989ZM311.8 105.463L310.968 98.5123L307.951 98.8736L306.155 101.324L311.8 105.463ZM320.179 106.142L318.668 112.977L318.701 112.984L318.734 112.991L320.179 106.142ZM337.163 121.82L330.334 123.355L330.349 123.424L330.366 123.493L337.163 121.82ZM326.221 140.495L323.499 134.046L323.45 134.067L323.402 134.088L326.221 140.495ZM312.335 143.304L311.93 136.316L311.921 136.316L312.335 143.304ZM294.772 144.344L294.358 137.356L290.022 137.613L288.327 141.613L294.772 144.344ZM294.29 145.483L287.844 142.752L285.699 147.814L290.109 151.097L294.29 145.483ZM308.326 155.935L304.145 161.549L309.332 165.412L313.592 160.546L308.326 155.935ZM311.561 155.28C311.593 155.297 311.78 155.407 312.146 155.683L320.572 144.503C319.874 143.977 319.115 143.458 318.321 143.02L311.561 155.28ZM312.146 155.683C312.579 156.01 312.935 156.37 313.234 156.773L324.472 148.424C323.363 146.931 322.056 145.621 320.572 144.503L312.146 155.683ZM312.545 149.564C311.046 152.681 308.644 156.509 305.194 161.088L316.375 169.513C320.147 164.508 323.124 159.869 325.161 155.633L312.545 149.564ZM314.997 159.71L287.045 138.646L278.62 149.827L306.572 170.891L314.997 159.71ZM289.776 145.121C289.831 144.687 289.897 144.466 289.92 144.401C289.942 144.337 289.895 144.502 289.691 144.772L278.51 136.347C276.853 138.546 276.173 141.115 275.888 143.353L289.776 145.121ZM289.691 144.772C289.842 144.573 289.971 144.404 290.081 144.263C290.192 144.121 290.275 144.019 290.332 143.951C290.394 143.876 290.402 143.87 290.367 143.907C290.349 143.927 290.301 143.977 290.23 144.047C290.164 144.11 290.032 144.235 289.846 144.386L281.043 133.5C280.331 134.075 279.768 134.758 279.564 135.003C279.24 135.393 278.883 135.853 278.51 136.347L289.691 144.772ZM286.247 145.897C304.991 143.734 315.532 142.478 317.316 142.172L314.949 128.373C314.949 128.373 314.948 128.374 314.945 128.374C314.942 128.374 314.938 128.375 314.933 128.376C314.922 128.378 314.907 128.38 314.887 128.383C314.848 128.389 314.796 128.397 314.73 128.407C314.598 128.426 314.425 128.45 314.208 128.48C313.775 128.539 313.199 128.614 312.474 128.705C311.026 128.888 309.03 129.132 306.479 129.437C301.379 130.047 294.101 130.897 284.642 131.989L286.247 145.897ZM317.512 142.135C320.052 141.625 322.662 140.501 325.211 139.121L318.545 126.81C316.582 127.873 315.362 128.287 314.753 128.41L317.512 142.135ZM325.066 139.197C328.212 137.588 330.929 135.411 333.039 132.611L321.858 124.185C321.16 125.112 320.162 125.98 318.69 126.734L325.066 139.197ZM333.039 132.611C335.701 129.078 336.591 124.926 336.146 120.707L322.223 122.177C322.352 123.4 322.085 123.884 321.858 124.185L333.039 132.611ZM336.158 120.834C335.692 115.502 332.504 111.422 328.574 108.461L320.148 119.642C322.181 121.173 322.208 122.021 322.211 122.051L336.158 120.834ZM328.574 108.461C326.591 106.967 324.515 105.698 322.36 104.839L317.174 117.843C317.843 118.11 318.83 118.648 320.148 119.642L328.574 108.461ZM315.087 106.135L305.768 114.514L315.128 124.925L324.447 116.546L315.087 106.135ZM314.084 113.738C313.743 113.531 313.331 113.252 312.844 112.885L304.418 124.066C305.208 124.661 306.008 125.212 306.813 125.701L314.084 113.738ZM312.844 112.885C312.687 112.767 312.135 112.287 311.071 111.168L300.922 120.811C302.093 122.044 303.297 123.221 304.418 124.066L312.844 112.885ZM312.705 117.988C313.248 116.166 314.655 113.408 317.446 109.601L306.155 101.324C302.954 105.69 300.492 109.95 299.288 113.991L312.705 117.988ZM312.633 112.413C313.875 112.264 315.825 112.348 318.668 112.977L321.689 99.3065C317.949 98.48 314.314 98.1114 310.968 98.5123L312.633 112.413ZM318.734 112.991C321.346 113.542 323.15 114.391 324.398 115.331L332.823 104.15C329.599 101.72 325.782 100.17 321.624 99.2925L318.734 112.991ZM324.398 115.331C328.12 118.136 329.77 120.845 330.334 123.355L343.993 120.285C342.524 113.751 338.473 108.407 332.823 104.15L324.398 115.331ZM330.366 123.493C331.143 126.649 330.535 127.958 330.048 128.604L341.229 137.029C344.995 132.032 345.403 126.01 343.961 120.147L330.366 123.493ZM330.048 128.604C327.93 131.415 325.726 133.106 323.499 134.046L328.943 146.944C333.816 144.887 337.89 141.46 341.229 137.029L330.048 128.604ZM323.402 134.088C320.954 135.165 317.24 136.008 311.93 136.316L312.739 150.292C318.951 149.932 324.494 148.903 329.04 146.903L323.402 134.088ZM311.921 136.316L294.358 137.356L295.186 151.332L312.748 150.292L311.921 136.316ZM288.327 141.613L287.844 142.752L300.735 148.214L301.217 147.075L288.327 141.613ZM290.109 151.097L304.145 161.549L312.507 150.32L298.47 139.868L290.109 151.097ZM313.592 160.546C316.605 157.106 318.416 155.316 319.244 154.671L310.638 143.629C308.634 145.19 306.036 147.924 303.059 151.324L313.592 160.546ZM378.994 156.723L371.994 156.737L371.994 156.79L371.995 156.843L378.994 156.723ZM354.139 189.706L352.071 183.019L352.043 183.028L352.015 183.037L354.139 189.706ZM325.645 169.362L318.645 169.33L318.645 169.385L318.646 169.441L325.645 169.362ZM333.953 174.621L327.465 177.247L327.497 177.328L327.532 177.407L333.953 174.621ZM345.053 183.486L346.424 176.621L346.424 176.621L345.053 183.486ZM350.193 183.477L348.596 176.662L348.481 176.689L348.367 176.72L350.193 183.477ZM354.959 180.808L350.507 175.407L350.452 175.452L350.398 175.498L354.959 180.808ZM359.627 142.379L360.895 135.495L360.844 135.485L360.793 135.477L359.627 142.379ZM354.306 142.627L352.142 135.97L354.306 142.627ZM349.48 145.376L345.119 139.9L345.099 139.916L345.078 139.933L349.48 145.376ZM336.624 161.107L330.592 157.556L330.586 157.566L330.58 157.576L336.624 161.107ZM365.259 145.872C370.386 149.735 371.987 153.344 371.994 156.737L385.994 156.709C385.976 147.729 381.228 140.376 373.684 134.691L365.259 145.872ZM371.995 156.843C372.065 160.923 370.376 166 365.679 172.233L376.86 180.658C382.675 172.941 386.135 164.869 385.993 156.603L371.995 156.843ZM365.679 172.233C361.056 178.368 356.468 181.659 352.071 183.019L356.208 196.394C364.219 193.916 371.052 188.366 376.86 180.658L365.679 172.233ZM352.015 183.037C348.549 184.141 344.606 183.649 339.542 179.833L331.116 191.014C338.831 196.827 347.428 199.191 356.264 196.376L352.015 183.037ZM339.542 179.833C334.222 175.824 332.679 172.292 332.645 169.283L318.646 169.441C318.745 178.218 323.658 185.394 331.116 191.014L339.542 179.833ZM332.645 169.393C332.662 165.654 334.514 160.417 339.762 153.454L328.581 145.028C322.514 153.08 318.682 161.256 318.645 169.33L332.645 169.393ZM339.762 153.454C345.006 146.494 349.58 143.38 353.264 142.445C356.583 141.603 360.416 142.222 365.259 145.872L373.684 134.691C366.388 129.192 358.268 126.731 349.82 128.876C341.737 130.927 334.731 136.867 328.581 145.028L339.762 153.454ZM327.08 165.657C325.901 169.48 325.927 173.448 327.465 177.247L340.442 171.994C340.23 171.469 340.133 170.837 340.458 169.784L327.08 165.657ZM327.532 177.407C329.024 180.844 331.475 183.647 334.468 185.902L342.893 174.721C341.414 173.606 340.714 172.615 340.375 171.834L327.532 177.407ZM334.468 185.902C337.258 188.004 340.344 189.684 343.683 190.35L346.424 176.621C345.844 176.505 344.682 176.069 342.893 174.721L334.468 185.902ZM343.683 190.35C346.382 190.889 349.235 190.988 352.02 190.235L348.367 176.72C348.217 176.76 347.643 176.865 346.424 176.621L343.683 190.35ZM351.791 190.293C354.754 189.598 357.331 187.999 359.521 186.118L350.398 175.498C349.275 176.464 348.674 176.644 348.596 176.662L351.791 190.293ZM359.412 186.209C362.64 183.548 365.902 179.912 369.211 175.521L358.031 167.095C355.081 171.01 352.569 173.707 350.507 175.407L359.412 186.209ZM369.211 175.521C373.954 169.227 377.266 162.826 377.778 156.531C378.341 149.6 375.434 143.772 369.953 139.642L361.528 150.823C363.501 152.31 363.967 153.637 363.824 155.397C363.629 157.795 362.155 161.622 358.031 167.095L369.211 175.521ZM369.953 139.642C367.245 137.602 364.22 136.107 360.895 135.495L358.359 149.263C359.138 149.406 360.189 149.815 361.528 150.823L369.953 139.642ZM360.793 135.477C357.949 134.996 354.996 135.042 352.142 135.97L356.47 149.284C356.712 149.205 357.306 149.086 358.46 149.281L360.793 135.477ZM352.142 135.97C349.592 136.798 347.252 138.202 345.119 139.9L353.84 150.852C355.048 149.89 355.924 149.461 356.47 149.284L352.142 135.97ZM345.078 139.933C341.986 142.434 339.113 145.508 336.431 149.066L347.612 157.492C349.745 154.661 351.844 152.466 353.882 150.819L345.078 139.933ZM336.431 149.066C333.959 152.348 331.979 155.199 330.592 157.556L342.657 164.657C343.652 162.966 345.271 160.599 347.612 157.492L336.431 149.066ZM330.58 157.576C329.129 160.06 327.972 162.765 327.08 165.657L340.458 169.784C341.071 167.798 341.817 166.095 342.669 164.637L330.58 157.576ZM393.245 208.156L396.625 202.026L392.583 199.797L388.942 202.635L393.245 208.156ZM397.157 211.605L403.465 214.639L405.299 210.826L402.776 207.43L397.157 211.605ZM389.088 224.306L384.876 229.897L390.466 234.11L394.679 228.519L389.088 224.306ZM361.136 203.243L354.192 202.359L353.679 206.389L356.923 208.833L361.136 203.243ZM363.748 197.949L362.946 190.995L360.927 191.228L359.346 192.506L363.748 197.949ZM394.436 194.279L395.62 201.178L395.718 201.161L395.816 201.141L394.436 194.279ZM400.182 191.972L396.994 185.74L396.921 185.777L396.849 185.816L400.182 191.972ZM407.488 180.448L400.514 181.057L400.52 181.12L400.527 181.183L407.488 180.448ZM398.071 170.347L400.664 163.845L396.625 162.234L393.391 165.141L398.071 170.347ZM388.752 178.726L385.116 184.708L389.563 187.41L393.432 183.931L388.752 178.726ZM384.3 174.996L377.592 172.997L376.435 176.88L379.226 179.817L384.3 174.996ZM390.104 164.469L389.272 157.518L386.255 157.88L384.459 160.33L390.104 164.469ZM398.483 165.148L396.972 171.983L397.005 171.99L397.037 171.997L398.483 165.148ZM415.467 180.826L408.637 182.361L408.653 182.43L408.67 182.499L415.467 180.826ZM404.525 199.501L401.802 193.053L401.754 193.073L401.705 193.094L404.525 199.501ZM390.638 202.31L390.234 195.322L390.224 195.322L390.638 202.31ZM373.076 203.35L372.662 196.362L368.325 196.619L366.631 200.619L373.076 203.35ZM372.593 204.489L366.148 201.758L364.003 206.82L368.413 210.103L372.593 204.489ZM386.63 214.941L382.449 220.555L387.636 224.418L391.896 219.552L386.63 214.941ZM389.865 214.286C389.897 214.303 390.083 214.413 390.45 214.69L398.876 203.509C398.177 202.983 397.419 202.464 396.625 202.026L389.865 214.286ZM390.45 214.69C390.883 215.016 391.239 215.376 391.538 215.779L402.776 207.43C401.667 205.937 400.359 204.627 398.876 203.509L390.45 214.69ZM390.849 208.57C389.35 211.687 386.948 215.515 383.498 220.094L394.679 228.519C398.45 223.514 401.428 218.875 403.465 214.639L390.849 208.57ZM393.301 218.716L365.349 197.653L356.923 208.833L384.876 229.897L393.301 218.716ZM368.08 204.127C368.135 203.693 368.201 203.472 368.223 203.407C368.245 203.343 368.198 203.508 367.995 203.779L356.814 195.353C355.157 197.552 354.477 200.121 354.192 202.359L368.08 204.127ZM367.995 203.779C368.145 203.579 368.275 203.41 368.385 203.269C368.496 203.127 368.578 203.025 368.636 202.957C368.697 202.882 368.706 202.876 368.671 202.913C368.652 202.933 368.605 202.983 368.533 203.053C368.468 203.116 368.336 203.241 368.15 203.392L359.346 192.506C358.635 193.082 358.071 193.764 357.868 194.009C357.544 194.399 357.187 194.859 356.814 195.353L367.995 203.779ZM364.55 204.903C383.294 202.74 393.836 201.484 395.62 201.178L393.253 187.379C393.253 187.379 393.251 187.38 393.249 187.38C393.246 187.381 393.242 187.381 393.236 187.382C393.225 187.384 393.21 187.386 393.191 187.389C393.152 187.395 393.1 187.403 393.034 187.413C392.902 187.432 392.729 187.456 392.512 187.486C392.078 187.545 391.503 187.62 390.778 187.711C389.33 187.894 387.334 188.138 384.783 188.443C379.682 189.053 372.405 189.904 362.946 190.995L364.55 204.903ZM395.816 201.141C398.355 200.631 400.966 199.507 403.515 198.127L396.849 185.816C394.886 186.879 393.666 187.293 393.057 187.416L395.816 201.141ZM403.37 198.203C406.516 196.594 409.232 194.417 411.343 191.617L400.162 183.192C399.463 184.118 398.466 184.986 396.994 185.74L403.37 198.203ZM411.343 191.617C414.004 188.085 414.894 183.932 414.449 179.713L400.527 181.183C400.656 182.406 400.389 182.89 400.162 183.192L411.343 191.617ZM414.461 179.84C413.996 174.508 410.808 170.429 406.877 167.467L398.452 178.648C400.485 180.179 400.512 181.027 400.514 181.057L414.461 179.84ZM406.877 167.467C404.895 165.973 402.819 164.704 400.664 163.845L395.477 176.849C396.147 177.116 397.133 177.654 398.452 178.648L406.877 167.467ZM393.391 165.141L384.072 173.52L393.432 183.931L402.751 175.552L393.391 165.141ZM392.387 172.744C392.047 172.537 391.635 172.258 391.147 171.891L382.722 183.072C383.512 183.667 384.311 184.218 385.116 184.708L392.387 172.744ZM391.147 171.891C390.991 171.773 390.438 171.293 389.375 170.174L379.226 179.817C380.397 181.05 381.601 182.227 382.722 183.072L391.147 171.891ZM391.009 176.994C391.552 175.172 392.959 172.414 395.75 168.607L384.459 160.33C381.258 164.696 378.795 168.956 377.592 172.997L391.009 176.994ZM390.937 171.419C392.178 171.27 394.129 171.354 396.972 171.983L399.993 158.313C396.253 157.486 392.618 157.118 389.272 157.518L390.937 171.419ZM397.037 171.997C399.65 172.548 401.454 173.397 402.702 174.337L411.127 163.156C407.902 160.726 404.086 159.176 399.928 158.299L397.037 171.997ZM402.702 174.337C406.423 177.142 408.073 179.851 408.637 182.361L422.297 179.291C420.828 172.757 416.776 167.413 411.127 163.156L402.702 174.337ZM408.67 182.499C409.447 185.655 408.838 186.964 408.352 187.61L419.533 196.036C423.299 191.038 423.707 185.016 422.264 179.153L408.67 182.499ZM408.352 187.61C406.234 190.421 404.03 192.112 401.802 193.053L407.247 205.95C412.12 203.893 416.194 200.466 419.533 196.036L408.352 187.61ZM401.705 193.094C399.258 194.171 395.543 195.014 390.234 195.322L391.043 209.298C397.255 208.939 402.798 207.909 407.344 205.909L401.705 193.094ZM390.224 195.322L372.662 196.362L373.49 210.338L391.052 209.298L390.224 195.322ZM366.631 200.619L366.148 201.758L379.038 207.22L379.521 206.081L366.631 200.619ZM368.413 210.103L382.449 220.555L390.81 209.326L376.774 198.875L368.413 210.103ZM391.896 219.552C394.908 216.112 396.72 214.322 397.548 213.677L388.942 202.635C386.938 204.196 384.339 206.93 381.363 210.33L391.896 219.552ZM425.005 238.976L420.792 244.566L426.539 248.897L430.71 243.032L425.005 238.976ZM445.992 209.463L451.697 213.52L465.563 194.021L443.374 202.971L445.992 209.463ZM406.596 225.354L403.977 218.862L392.317 223.565L402.457 230.999L406.596 225.354ZM458.333 208.871L463.827 213.21L468.265 207.59L462.546 203.281L458.333 208.871ZM430.995 243.489L425.501 239.151L421.063 244.77L426.782 249.08L430.995 243.489ZM439.58 250.209L445.17 254.421L449.267 248.984L443.946 244.737L439.58 250.209ZM435.11 254.479L430.897 260.069L434.272 262.612L438.095 260.81L435.11 254.479ZM427.124 248.46L431.336 242.87L425.975 238.83L421.714 244.017L427.124 248.46ZM416.514 261.376L413.48 267.684L418.434 270.068L421.923 265.82L416.514 261.376ZM411.942 257.806L406.155 253.867L403.39 257.93L406.272 261.91L411.942 257.806ZM421.293 244.067L427.08 248.006L430.834 242.491L425.506 238.477L421.293 244.067ZM397.095 225.832L390.098 225.614L389.985 229.24L392.882 231.423L397.095 225.832ZM399.526 220.778L400.501 227.71L401.374 227.587L402.189 227.252L399.526 220.778ZM447.791 200.927L452.004 195.337L448.818 192.936L445.129 194.453L447.791 200.927ZM430.71 243.032L451.697 213.52L440.287 205.406L419.3 234.919L430.71 243.032ZM443.374 202.971L403.977 218.862L409.214 231.846L448.611 215.955L443.374 202.971ZM402.457 230.999C410.624 236.987 416.731 241.505 420.792 244.566L429.218 233.385C425.08 230.267 418.914 225.705 410.735 219.708L402.457 230.999ZM452.84 204.533L425.501 239.151L436.488 247.828L463.827 213.21L452.84 204.533ZM426.782 249.08C428.672 250.504 431.473 252.695 435.213 255.68L443.946 244.737C440.18 241.732 437.257 239.443 435.208 237.899L426.782 249.08ZM433.989 245.996C433.3 246.911 432.756 247.516 432.363 247.892C431.945 248.291 431.864 248.27 432.125 248.147L438.095 260.81C440.998 259.442 443.337 256.854 445.17 254.421L433.989 245.996ZM439.323 248.888L431.336 242.87L422.911 254.051L430.897 260.069L439.323 248.888ZM421.714 244.017L411.105 256.933L421.923 265.82L432.533 252.904L421.714 244.017ZM419.549 255.068C419.037 254.822 418.574 254.539 418.15 254.22L409.725 265.401C410.899 266.286 412.153 267.046 413.48 267.684L419.549 255.068ZM418.15 254.22C417.852 253.995 417.696 253.816 417.613 253.702L406.272 261.91C407.252 263.265 408.426 264.422 409.725 265.401L418.15 254.22ZM417.729 261.745L427.08 248.006L415.507 240.128L406.155 253.867L417.729 261.745ZM425.506 238.477L401.308 220.242L392.882 231.423L417.081 249.658L425.506 238.477ZM404.091 226.05C404.095 225.939 404.107 225.966 404.069 226.085C404.027 226.212 403.95 226.373 403.833 226.527L392.652 218.102C390.93 220.388 390.179 223.016 390.098 225.614L404.091 226.05ZM403.833 226.527C404.194 226.048 404.408 225.778 404.509 225.658C404.571 225.583 404.508 225.665 404.364 225.811C404.302 225.872 404.092 226.083 403.779 226.327C403.622 226.449 403.326 226.67 402.919 226.897C402.594 227.078 401.727 227.537 400.501 227.71L398.552 213.846C397.314 214.02 396.432 214.484 396.09 214.675C395.667 214.912 395.352 215.145 395.173 215.285C394.815 215.564 394.55 215.824 394.424 215.952C394.149 216.229 393.913 216.504 393.762 216.685C393.435 217.078 393.053 217.57 392.652 218.102L403.833 226.527ZM402.189 227.252L450.454 207.401L445.129 194.453L396.864 214.304L402.189 227.252ZM443.579 206.518L454.121 214.462L462.546 203.281L452.004 195.337L443.579 206.518ZM442.825 264.55L436.618 261.313L434.927 264.558L436.625 267.799L442.825 264.55ZM448.922 257.124L452.726 251.247L448.384 248.437L444.422 251.762L448.922 257.124ZM456.648 263.321L462.778 266.701L465.104 262.483L461.995 258.803L456.648 263.321ZM450.371 270.987L446.884 277.057L451.196 279.534L454.954 276.277L450.371 270.987ZM458.542 256.985L455.306 263.192L460.432 265.865L464.026 261.336L458.542 256.985ZM454.29 253.656L448.525 249.685L445.227 254.474L449.329 258.594L454.29 253.656ZM486.195 207.328L490.027 201.47L484.307 197.729L480.43 203.358L486.195 207.328ZM493.362 213.104L498.845 217.455L502.409 212.965L498.709 208.587L493.362 213.104ZM449.032 267.786C449.026 267.798 449.053 267.746 449.134 267.614C449.213 267.487 449.323 267.316 449.472 267.097C449.773 266.655 450.185 266.083 450.723 265.368L439.542 256.942C438.376 258.489 437.288 260.029 436.618 261.313L449.032 267.786ZM450.723 265.368C451.595 264.21 452.499 263.26 453.422 262.485L444.422 251.762C442.62 253.274 440.997 255.011 439.542 256.942L450.723 265.368ZM445.118 263C446.572 263.941 447.858 264.836 448.983 265.684L457.408 254.503C455.977 253.425 454.414 252.34 452.726 251.247L445.118 263ZM448.983 265.684C449.941 266.406 450.701 267.129 451.301 267.839L461.995 258.803C460.653 257.215 459.112 255.787 457.408 254.503L448.983 265.684ZM450.518 259.941C450.314 260.311 449.755 261.169 448.629 262.663L459.81 271.088C461.012 269.494 462.071 267.983 462.778 266.701L450.518 259.941ZM448.629 262.663C447.809 263.751 446.866 264.762 445.787 265.696L454.954 276.277C456.761 274.712 458.384 272.982 459.81 271.088L448.629 262.663ZM453.857 264.917C452.746 264.279 451.544 263.482 450.25 262.507L441.824 273.687C443.512 274.959 445.198 276.088 446.884 277.057L453.857 264.917ZM450.25 262.507C449.325 261.81 449.063 261.373 449.026 261.301L436.625 267.799C437.888 270.21 439.768 272.138 441.824 273.687L450.25 262.507ZM461.779 250.778C461.908 250.846 461.97 250.887 461.941 250.869C461.921 250.856 461.865 250.82 461.764 250.751C461.561 250.611 461.264 250.396 460.858 250.091L452.433 261.272C453.284 261.913 454.357 262.697 455.306 263.192L461.779 250.778ZM460.858 250.091C460.166 249.569 459.641 249.109 459.251 248.717L449.329 258.594C450.269 259.538 451.314 260.429 452.433 261.272L460.858 250.091ZM460.055 257.626L491.96 211.298L480.43 203.358L448.525 249.685L460.055 257.626ZM482.364 213.186C483.969 214.236 485.2 215.093 486.096 215.768L494.521 204.587C493.288 203.657 491.777 202.614 490.027 201.47L482.364 213.186ZM486.096 215.768C486.695 216.219 487.339 216.822 488.015 217.622L498.709 208.587C497.444 207.089 496.052 205.741 494.521 204.587L486.096 215.768ZM487.879 208.753L453.059 252.634L464.026 261.336L498.845 217.455L487.879 208.753Z'
				fill='black'
				mask='url(#path-2-outside-1_2_2)'
			/>
		</g>
		<defs>
			<clipPath id='clip0_2_2'>
				<rect width='512' height='512' fill='white' />
			</clipPath>
		</defs>
	</svg>
);
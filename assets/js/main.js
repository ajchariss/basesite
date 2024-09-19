
var BASE = ( function( BASE, $ ) {

	/**
	 * Doc Ready
	 */
	$( () => {
		BASE.Global.init();
		BASE.MobileMenu.init();
	});

	$(window).on( 'load', () => {

	});

	/**
	 * Global Block
	 */
	BASE.Global = {
		init: function() {
			this.bind();
		},

		bind: function(){ 

            $(".icon-search-btn").on('click', function(e) {
                e.preventDefault();
                var $this = $(this);
                $this.toggleClass('active');
                $this.parent().toggleClass('active');
                $( ".searchbox--form" ).slideToggle();
            });
		}
	};

    BASE.MobileMenu = {
        init: function() {
            $( '.nav-primary li.menu-item-has-children > a' ).after( '<span class="sub-menu-toggle icon-chevron-down"></span>' );
            $( '.sub-menu-toggle' ).click( function() {
                var $this = $(this),
                    $parent = $this.closest( 'li' ),
                    $wrap = $parent.find( '> .sub-menu' );
                $wrap.toggleClass( 'js-toggled' );
                $this.toggleClass( 'js-toggled' );
            });

            $('.toggle-menu').click( function() {
                $(this).toggleClass('toggle-menu--close');
                $('.page-header .nav-primary').slideToggle();
            });

        }
    };

	return BASE

} ( BASE || {}, jQuery ));
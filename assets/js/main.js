
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
            $('.menu-btn').click( function() {
                $(this).toggleClass('close');
                $('.page-header .nav-primary').fadeToggle();
            });

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
            $( '.nav-primary li.menu-item-has-children > a' ).after( '<span class="sub-menu-toggle icon-chevron-small-down hidden-md-up"></span>' );
            $( '.sub-menu-toggle' ).click( function() {
                var $this = $(this),
                    $parent = $this.closest( 'li' ),
                    $wrap = $parent.find( '> .sub-menu' );
                $wrap.toggleClass( 'js-toggled' );
                $this.toggleClass( 'js-toggled' );
            });

            $('.menu-btn').click( function() {
                $(this).toggleClass('icon-close');
                $('.page-header .nav-primary').fadeToggle();
            });

        }
    };

	return BASE

} ( BASE || {}, jQuery ));
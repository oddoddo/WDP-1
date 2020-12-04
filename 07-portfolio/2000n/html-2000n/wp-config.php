<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'eehd80yul');

/** MySQL database username */
define('DB_USER', 'eehd80yul');

/** MySQL database password */
define('DB_PASSWORD', 'tkddlfch78**');

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ')>]2-Y/(QTv{vo|Q+o2 7xfCk]$M@1r%$=6?DG1^TLsBF&jXX:Rn|$9Ym&,%+cRf' );
define( 'SECURE_AUTH_KEY',  '$Rmt=~RmLqyq/z5hbom5%rYP^|Sc%TB%?Il%77AuPWs/q4(u2-gAR4XI&}FG^o9#' );
define( 'LOGGED_IN_KEY',    '87V3#g)]Vrs|tyi8a5H-,]Qpv;PAvjCf3GBeaJQkf53P!={Y_5;!_=/fFzK/+J1)' );
define( 'NONCE_KEY',        'N%+TmEPY]uq(QpqDRmcPPi! ASoqNr*uqf{gZc<m 4L28InJ{LX<3ZmU$S kq>h)' );
define( 'AUTH_SALT',        'Yr$+97YcXh(;)7eOLJGLx; ^d~.jA3u!GVK~5&))NYzF)#j|ki@E^wbr<amDk-3%' );
define( 'SECURE_AUTH_SALT', 'Dgr,yocr#:<m%sW;<3GP-hKeUX`YB1#R$VMI|/IwWHjp2^d1E8)8Cs_LDH~P.Yez' );
define( 'LOGGED_IN_SALT',   '{lZoYjR23:=<WT)F3n`1t)7+*{GNR(_yy;ykuK@4zI)MpNr+oP!LXtg{ }h=KW0Q' );
define( 'NONCE_SALT',       '_Pe=}q}.lN(HlA},hgjfUPT,^4lIg=*<r{jD7Wg ?qf|u/2*8<0~9fYRv62~vlGV' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );

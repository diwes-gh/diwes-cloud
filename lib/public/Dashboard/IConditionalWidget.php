<?php

declare(strict_types=1);

/**
 * @copyright Copyright (c) 2022 Joas Schilling <coding@schilljs.com>
 *
 * @author Joas Schilling <coding@schilljs.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCP\Dashboard;

/**
 * interface IConditionalWidget
 *
 * Allows an app to lazy-register a widget and in the lazy part of the code
 * it can decide if the widget should really be registered.
 *
 * @since 26.0.0
 */
interface IConditionalWidget extends IWidget {
	/**
	 * @return bool Whether the widget is enabled and should be registered
	 * @since 26.0.0
	 */
	public function isEnabled(): bool;
}
